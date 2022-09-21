import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import DriveFileMoveOutlinedIcon from '@mui/icons-material/DriveFileMoveOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

const Mail = () => {

  const history = useNavigate();

  return (
    <div className='mail'>
      <div className="mail-tools">
        <div className="mail-toolsLeft">
          <IconButton onClick={() => history('/')}>
            <ArrowBackOutlinedIcon />
          </IconButton>
          <IconButton>
            <ArchiveOutlinedIcon />
          </IconButton>
          <IconButton>
            <ReportGmailerrorredOutlinedIcon />
          </IconButton>
          <IconButton>
            <DeleteOutlinedIcon />
          </IconButton>
          <IconButton>
            <EmailOutlinedIcon />
          </IconButton>
          <IconButton>
            <AccessTimeOutlinedIcon />
          </IconButton>
          <IconButton>
            <AddTaskOutlinedIcon />
          </IconButton>
          <IconButton>
            <DriveFileMoveOutlinedIcon />
          </IconButton>
          <IconButton>
            <LabelOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVertOutlinedIcon />
          </IconButton>
        </div>
        <div className="mail-toolsRight">

        </div>
      </div>
    </div>
  );
};

export default Mail;