import React from 'react'
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
const PREFIX = 'MyCard';
const classes = {
  root: `${PREFIX}-root`,
  cta: `${PREFIX}-cta`,
  content: `${PREFIX}-content`,
}
const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main
  },
  [`& .${classes.cta}`]: {
    //borderRadius: theme.shape.radius
  },
  [`& .${classes.content}`]: {
    color: theme.palette.common.white,
    fontSize: 16,
    lineHeight: 1.7
  },
}))
interface Props {
  border?: string;
  color?: string;
  children?: React.ReactNode;
  height?: string;
  onClick?: () => void;
  radius?: string
  type?: any;
}
const MuiButton: React.FC<Props> = ({ 
  onClick,  
  type ='text',
  children = "",
}) => { 
return (
  <Button 
  onClick={onClick}
  type={type}
  >
    {children}
  </Button>

 
);
}

export default MuiButton;