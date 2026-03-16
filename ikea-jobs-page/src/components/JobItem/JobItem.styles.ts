import { styled } from '@mui/material/styles';
import { Box, Button, Card, Typography } from '@mui/material';
import { SOCIAL_MEDIA } from './constants';

export const JobCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2.5),
  textAlign: 'right',
  direction: 'rtl',
  transition: 'box-shadow 0.3s ease-in-out',
  '&:hover': {
    boxShadow: theme.shadows[4],
  },
}));

export const JobTitle = styled(Typography)(({ theme }) => ({
  cursor: 'pointer',
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(1),
  fontWeight: 600,
  transition: 'color 0.2s ease-in-out',
  '&:hover': {
    textDecoration: 'underline',
    color: theme.palette.primary.dark,
  },
}));

export const ShareButtonsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  marginTop: theme.spacing(1.5),
  marginBottom: theme.spacing(2),
  flexWrap: 'wrap',
}));

export const WhatsAppButton = styled(Button)(({ theme }) => ({
  backgroundColor: SOCIAL_MEDIA.WHATSAPP.COLOR,
  color: theme.palette.common.white,
  fontSize: '14px',
  fontWeight: 500,
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    backgroundColor: SOCIAL_MEDIA.WHATSAPP.HOVER_COLOR,
    transform: 'translateY(-2px)',
    boxShadow: theme.shadows[3],
  },
}));

export const FacebookButton = styled(Button)(({ theme }) => ({
  backgroundColor: SOCIAL_MEDIA.FACEBOOK.COLOR,
  color: theme.palette.common.white,
  fontSize: '14px',
  fontWeight: 500,
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    backgroundColor: SOCIAL_MEDIA.FACEBOOK.HOVER_COLOR,
    transform: 'translateY(-2px)',
    boxShadow: theme.shadows[3],
  },
}));

export const JobDetails = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2.5),
  backgroundColor: theme.palette.grey[50],
  padding: theme.spacing(2.5),
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
}));

export const JobInfo = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  fontSize: '15px',
  lineHeight: 1.6,
  '& strong': {
    fontWeight: 600,
    marginRight: theme.spacing(0.5),
    color: theme.palette.text.primary,
  },
}));

export const JobDescription = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  lineHeight: 1.8,
  color: theme.palette.text.secondary,
  '& p': {
    marginBottom: theme.spacing(1.5),
  },
  '& ul, & ol': {
    paddingRight: theme.spacing(3),
    marginBottom: theme.spacing(1.5),
  },
}));
