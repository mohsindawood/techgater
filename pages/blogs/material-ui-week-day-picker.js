import React from "react";
import BlogMain from "src/components/blog/BlogMain";
import { Paper, Box } from "@mui/material";
import Head from 'next/head'
import { weekdaypicker } from 'src/components/code/WeekDaypicker';
import WeekDayPicker from 'src/components/blog/WeekDatePicker';
const data = "This Date Picker in made with Reactjs and Material-UI. In this demo you can select a single future date from week calendar also can change week by using actions.";

export default function weekDayPicker() {
     return (
          <Box>
               <Head>
                    <title>Date picker from week calendar | | Techgater - Web Design & Development Agency</title>

                    <meta name="keywords" content="material-ui date picker, material-ui date picker from week calendar, date picker from week calendar, react js date picker from week calendar, next js date picker from week calendar, techgater week calendar, week calendar picker, single date picker from week calendar" />
               </Head>
               <Paper>
                    <BlogMain code={weekdaypicker} Component={WeekDayPicker} heading={"Date picker from week calendar"} decription={data} />
               </Paper>
          </Box>
     );
}