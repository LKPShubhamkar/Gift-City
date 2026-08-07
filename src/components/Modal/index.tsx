import { Dialog, DialogContent, Typography, Button, Box } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import "./style.css";

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
}

const SuccessModal = ({ open, onClose }: SuccessModalProps) => {
  return (
    <Dialog open={open} onClose={onClose} className="success-dialog">
      <DialogContent className="success-content">
        <Box className="success-icon-wrapper">
          <CheckCircleRoundedIcon className="success-icon" />
        </Box>

        <Typography className="success-title">Great!</Typography>

        <Typography className="success-message">
          Your details have been successfully submitted.
          <br />
          Our team will connect with you shortly.
        </Typography>

        <Button className="done-button" onClick={onClose}>
          Done
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessModal;
