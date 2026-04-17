'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { useApp } from '@/components/AppContext';

interface UseNarrationReturn {
  /** Speak the given text aloud. No-ops if sound is disabled or speechSynthesis is unavailable. */
  speak: (text: string, lang?: string) => void;
  /** Immediately stop any in-progress narration. */
  stop: () => void;
  /** Whether the speech synthesis is currently speaking. */
  isSpeaking: boolean;
}

/**
 * Custom hook for text-to-speech narration using the Web Speech API.
 *
 * - Respects the app's `soundEnabled` setting from AppContext.
 * - Supports French (default, `'fr-FR'`) and Arabic (`'ar-SA'`).
 * - Cancels any ongoing speech on unmount.
 * - Gracefully handles browsers that don't support SpeechSynthesis.
 */
export function useNarration(): UseNarrationReturn {
  const { settings } = useApp();
  const [isSpeaking, setIsSpeaking] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Internal: sync the `isSpeaking` flag from the native speechSynthesis state
  // so that it stays accurate even when speech ends naturally (not via stop()).
  useEffect(() => {
    const synth = window.speechSynthesis;
    if (!synth) return;

    const onEnd = () => setIsSpeaking(false);
    const onError = () => setIsSpeaking(false);

    synth.addEventListener('end', onEnd);
    synth.addEventListener('error', onError);

    return () => {
      synth.removeEventListener('end', onEnd);
      synth.removeEventListener('error', onError);
    };
  }, []);

  // Cleanup: cancel any ongoing speech when the component unmounts
  useEffect(() => {
    const synth = window.speechSynthesis;
    return () => {
      if (synth) {
        synth.cancel();
      }
    };
  }, []);

  const stop = useCallback(() => {
    const synth = window.speechSynthesis;
    if (synth) {
      synth.cancel();
      setIsSpeaking(false);
    }
  }, []);

  const speak = useCallback(
    (text: string, lang?: string) => {
      const synth = window.speechSynthesis;

      // Guard: browser doesn't support SpeechSynthesis
      if (!synth) {
        return;
      }

      // Guard: sound is disabled in app settings
      if (!settings.soundEnabled) {
        return;
      }

      // Guard: empty text
      const trimmed = text?.trim();
      if (!trimmed) {
        return;
      }

      // Cancel any currently playing utterance before starting a new one
      synth.cancel();

      const utterance = new SpeechSynthesisUtterance(trimmed);

      // Language: default to French, support Arabic
      switch (lang) {
        case 'ar':
        case 'ar-SA':
          utterance.lang = 'ar-SA';
          break;
        default:
          utterance.lang = 'fr-FR';
          break;
      }

      utterance.rate = 0.9; // slightly slower for clarity
      utterance.pitch = 1;

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      utteranceRef.current = utterance;
      synth.speak(utterance);
    },
    [settings.soundEnabled],
  );

  return { speak, stop, isSpeaking };
}

export default useNarration;
