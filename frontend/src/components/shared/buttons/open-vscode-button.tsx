import { useTranslation } from "react-i18next";
import { I18nKey } from "#/i18n/declaration";
import { cn } from "#/utils/utils";
import VSCodeIcon from "#/assets/vscode-alt.svg?react";

interface OpenVSCodeButtonProps {
  isDisabled: boolean;
  onClick: () => void;
}

export function OpenVSCodeButton({
  isDisabled,
  onClick,
}: OpenVSCodeButtonProps) {
  const { t } = useTranslation();
  const buttonText = t(I18nKey.VSCODE$OPEN);

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isDisabled}
      className={cn(
        "mt-auto mb-2 w-full h-10 text-white rounded flex items-center justify-center gap-2 transition-colors",
        isDisabled
          ? "bg-neutral-600 cursor-not-allowed"
          : "bg-[#4465DB] hover:bg-[#3451C7]",
      )}
      aria-label={buttonText}
    >
      <VSCodeIcon width={20} height={20} />
      {buttonText}
    </button>
  );
}
