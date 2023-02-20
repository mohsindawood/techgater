import React, { useState } from "react";
import { Box, Typography, IconButton, Container, Divider } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useTheme } from "@mui/material/styles";

export default function weekDayPicker() {
     const theme = useTheme();
     const [currentWeek, setWeek] = useState([0, 7]);
     const [selected, setSelected] = useState(new Date().toLocaleDateString());
     var now = new Date();
     var daysOfYear = [];
     for (
          var d = new Date(now.getFullYear(), now.getMonth(), now.getDate());
          d <= new Date(now.getFullYear() + 1, now.getMonth(), now.getDate());
          d.setDate(d.getDate() + 1)
     ) {
          daysOfYear.push(new Date(d));
     }
     var months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
     ];

     return (
          <Box>
               <Container>
                    <Box
                         sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              pb:1,
                         }}
                    >
                         <Typography variant="h6" color="primary.main">
                              {months[daysOfYear[currentWeek[1] - 1].getMonth()]}{" "}
                              {daysOfYear[currentWeek[1] - 1].getFullYear()}
                         </Typography>
                         <div>
                              <IconButton
                                   onClick={() => setWeek([currentWeek[0] - 7, currentWeek[1] - 7])}
                                   size="small"
                                   disabled={currentWeek[0] <= 0}
                                   color="primary"
                                   sx={{ mr: 1 }}
                              >
                                   <ArrowBackIosNewIcon fontSize="small" />
                              </IconButton>
                              <IconButton
                                   onClick={() => setWeek([currentWeek[0] + 7, currentWeek[1] + 7])}
                                   size="small"
                                   color="primary"
                              >
                                   <ArrowForwardIosIcon fontSize="small" />
                              </IconButton>
                         </div>
                    </Box>
                    <Divider/>
                    <Box
                         sx={{
                              p: 1,
                              display: " grid",
                              gridTemplateColumns: " auto auto auto auto auto auto auto",
                              padding: " 10px",
                              overflow: "hidden",
                         }}
                    >
                         {daysOfYear.slice(currentWeek[0], currentWeek[1]).map((v, i) => (
                              <Box
                                   sx={{
                                        py: 1.3,
                                        bgcolor:
                                             selected === v.toLocaleDateString() ? "primary.main" : "",
                                        cursor: "pointer",
                                        transition: "all 0.6s ease",
                                        borderRadius: 27,
                                        mx: 1,
                                        width: 36,
                                        textAlign: "center",
                                   }}
                                   onClick={() => setSelected(v.toLocaleDateString())}
                              >
                                   <Typography variant="body2" color={selected === v.toLocaleDateString() ? "primary.contrastText" : "text.primary"} sx={{ pb: 1 }}>
                                        {v.toString().slice(0, 3)}
                                   </Typography>
                                   <Typography variant="body2" color={selected === v.toLocaleDateString() ? "primary.contrastText" : "text.primary"}>
                                        {v.getDate()}
                                   </Typography>
                              </Box>
                         ))}
                    </Box>
               </Container>
          </Box>
     );
}