import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';

export function Start() {
  return (
    <div className="login">
      <Button variant="outlined" className='start-btn' color='secondary'>start<IconButton aria-label="fingerprint" color="secondary">
        <Fingerprint />
      </IconButton></Button>
    </div>
  );
}
