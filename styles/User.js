import { styled, keyframes } from './stitches.config';
import * as DialogPrimitive from "@radix-ui/react-dialog";

export const NetworkBox = styled('div', {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.5rem",
  borderRadius: "2rem",
  margin: "0px 6px",  
  padding: "6px 14px",
  
  fontWeight: "700",
  fontSize: "16px",
  lineHeight: "19px",

  
  variants: {
    color: {
      "green": {
        color: "$green",
        border: "1px solid $green",
      },
      "yellow": {
        color: "$yellow",
        border: "1px solid $yellow",
      },
      "red": {
        color: "$red",
        border: "1px solid $red",
      }
    }
}
});

export const Dot = styled('div', {
  width: "8px",
  height: "8px",
  borderRadius: "2rem",
  variants: {
    color: {
      "green": {
        background: "$green",
      },
      "yellow": {
        background: "$yellow",
      },
      "red": {
        background: "$red",
      }
    }
  }
  
});


const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: '$blackAlpha',
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
});

const StyledContent = styled(DialogPrimitive.Content, {
  backgroundColor: '$white',
  borderRadius: 6,
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  padding: 25,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
  '&:focus': { outline: 'none' },
});

function Content({ children, ...props }) {
  return (
    <DialogPrimitive.Portal>
      <StyledOverlay  />
      <StyledContent {...props}>{children}</StyledContent>
    </DialogPrimitive.Portal>
  );
}

const StyledTitle = styled(DialogPrimitive.Title, {
  margin: 0,
  fontWeight: 700,
  color: '$purple',
  fontSize: 17,
});

const StyledDescription = styled(DialogPrimitive.Description, {
  margin: '10px 0 20px',
  color: '$black',
  background: "$lightgray",
  padding: "6px 14px",
  borderRadius: "1rem",
  fontSize: 15,
  lineHeight: 1.5,
});

// Exports
export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogContent = Content;
export const DialogTitle = StyledTitle;
export const DialogDescription = StyledDescription;
export const DialogClose = DialogPrimitive.Close;




