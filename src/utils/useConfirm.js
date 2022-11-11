export default function useConfirm(message, onConfirm, onCancel) {
  if (!onConfirm || typeof onConfirm !== 'function') {
    return;
  }
  if (onCancel && typeof onCancel !== 'function') {
    return;
  }

  if (window.confirm(message)) {
    onConfirm();
  } else {
    onCancel();
  }
}
