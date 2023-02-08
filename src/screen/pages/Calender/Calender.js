import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Box, Typography, Button, IconButton, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import {
  BsArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import React, { useCallback, useEffect, useMemo, useState } from "react";

const StyledWrapper = styled("div")(
  ({ theme }) => `
  .fc-theme-standard .fc-scrollgrid {
    border-color: ${theme.palette.divider};
  }

  .fc th {
    border-right: none;
    border-left: none;
    padding: 10px 0;
  }

  .fc-theme-standard .fc-scrollgrid {
    border-right: none;
    border-left: none;
    border-bottom: none;
  }

  .fc-theme-standard td, .fc-theme-standard th {
    border-right: none;
  }

  .fc-theme-standard td, .fc-theme-standard th {
    border-color: ${theme.palette.divider};
  }

  .fc .fc-daygrid-day-number {
    color: ${theme.palette.text.secondary};
    font-size: 14px;
    font-weight: ${theme.typography.fontWeightBold};
    padding: 12px;
  }
`
);

const eventColors = ["primary", "warning", "error", "success"];

const Calendar = ({ onEventClick, ...calendarProps }) => {
  const theme = useTheme();
  const [events, setEvents] = useState([
    {
      id: "1",
      title: "React Summit",
      description: "Lorem ipsum dolor sid amet",
      start: 1519211809934,
      end: 1519211809934,
      color: "primary",
    },
  ]);
  const [viewTitle, setViewTitle] = useState("");
  const [calendarRef, setCalendarRef] = useState(null);

  const onCalendarRefSet = useCallback((ref) => {
    if (ref !== null) {
      setCalendarRef(ref);
    }
  }, []);

  const handleEventClick = (arg) => {
    if (onEventClick) {
      const event = events.find((e) => e.id === arg.event.id);
      onEventClick(event);
    }
  };

  const handleNext = () => {
    if (calendarRef) {
      calendarRef.getApi().next();
      setViewTitle(calendarRef.getApi().getCurrentData().viewTitle);
    }
  };

  const handlePrev = () => {
    if (calendarRef) {
      calendarRef.getApi().prev();
      setViewTitle(calendarRef.getApi().getCurrentData().viewTitle);
    }
  };

  const handleToday = () => {
    if (calendarRef) {
      calendarRef.getApi().today();
      setViewTitle(calendarRef.getApi().getCurrentData().viewTitle);
    }
  };

  useEffect(() => {
    if (calendarRef) {
      setViewTitle(calendarRef.getApi().getCurrentData().viewTitle);
    }
  }, [calendarRef]);

  const eventSource = useMemo(() => {
    return events.map((event) => {
      if (event.color && eventColors.includes(event.color)) {
        return { ...event, color: theme.palette[event.color].main };
      }
      return event;
    });
  }, [events, theme]);

  return (
      <Container maxWidth="xxl">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 2,
          width:"100%",
          Height: "100vh"
        }}
      >
        <Typography sx={{ display: "inline-flex" }} variant="h5">
          {viewTitle}
        </Typography>
        <Box>
          <IconButton
            aria-label="previous"
            component="span"
            onClick={handlePrev}
            sx={{ color: "primary.main" }}
          >
            <BsArrowLeftSquareFill />
          </IconButton>
          <Button onClick={handleToday}>TODAY</Button>
          <IconButton
            aria-label="next"
            component="span"
            edge="end"
            onClick={handleNext}
            sx={{ color: "primary.main" }}
          >
            <BsFillArrowRightSquareFill />
          </IconButton>
        </Box>
      </Box>
      {/* End - Custom Header Bar */}
      <StyledWrapper>
        <FullCalendar
          headerToolbar={false}
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          ref={onCalendarRefSet}
          events={eventSource}
          eventClick={handleEventClick}
          eventTimeFormat={{
            hour: "numeric",
            minute: "2-digit",
            meridiem: false,
          }}
          {...calendarProps}
        />
      </StyledWrapper>
      </Container>
  );
};

export default Calendar;

