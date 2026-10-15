"use client";
import { useState } from "react";

export default function CopyButton({ text }: { text: string }) {
    const [copied, setCopied] = useState(false);

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 1600);
        } catch {
            // Sin permiso de portapapeles: el email sigue visible para copiarlo a mano.
        }
    };

    return (
        <button type="button" onClick={copy} className="copy-button">
            {copied ? "Copiado" : "Copiar"}
        </button>
    );
}
