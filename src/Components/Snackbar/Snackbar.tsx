import { useEffect } from "react";
import "./Snackbar.css";

type SnackbarProps = {
  show: boolean;
  message: string;
  onClose: () => void;
};

function Snackbar({ show, message, onClose }: SnackbarProps) {
  useEffect(() => {
    console.log("Snackbar show:", show);
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <div
      className={`toast-container position-fixed bottom-0 start-0 p-3`}
      style={{ zIndex: 9999 }}
    >
      <div
        className={`toast align-items-center border-0 ${
          show ? "show" : "hide"
        }`}
        role="alert"
      >
        <div className="d-flex">
          <div className="toast-body">{message}</div>

          <button
            type="button"
            className="btn-close btn-close-dark me-2 m-auto"
            onClick={onClose}
          />
        </div>
      </div>
    </div>
  );
}

export default Snackbar;
