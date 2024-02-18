import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { Button ,Menu ,MenuItem ,} from '@mui/material';
import { Link } from 'react-router-dom';
import HotelIcon from '@mui/icons-material/Hotel';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import TrainIcon from '@mui/icons-material/Train';
import DirectionsBoatFilledIcon from '@mui/icons-material/DirectionsBoatFilled';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));

const ServiceBar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
                sx={{ backgroundColor: 'rgb(206, 141, 20)' }}
            >
                Service
            </Button>
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose} disableRipple>
                    <HotelIcon />
                    Hosting
                </MenuItem>
                <Link to='/carRent' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <MenuItem onClick={handleClose} disableRipple>
                        <DirectionsCarIcon />
                        Car rental
                    </MenuItem>
                </Link>
                <MenuItem onClick={handleClose} disableRipple>
                    <FlightTakeoffIcon />
                    Flights
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                    <TrainIcon />
                    Train
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                    <DirectionsBoatFilledIcon />
                    Cruises
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                    <LocalTaxiIcon />
                    Taxi
                </MenuItem>
            </StyledMenu>
        </div>
    );
};

export default ServiceBar;