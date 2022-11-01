import React, { useEffect, useState } from 'react'
import { Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import MyTextField from '../components/mytextfield';
import sendData from '../config/firebasemethods';
import Button from '@mui/material/Button';

export default function Result() {
  let [module, setModule] = useState({});
  let [course, setCourse] = useState([
    { courseName: "Web and Mobile" },
    { courseName: "Flutter" },
    { courseName: "Graphic Designing" },
    { courseName: "Amazon" }
  ]
  );
  let [section, setSection] = useState(
    [{ section: "A" }, { section: "B" }, { section: "C" }]
  );
  let [btnDisabled, setBtnDisabled] = useState(false);

  let fillModule = (key, val) => {
    module[key] = val;
    setModule({ ...module })
    console.log(module)
  }
  let sendStdData = () => {
    console.log(module)

    sendData({
      StudentInfo: module,
      // time: new Date(),
      // userId: userId
    },
      `studentsRecord/`)
      .then((StudentInfo => { console.log(StudentInfo) }))
      .catch((err => { console.log(err) }))
  }
  return (
    <>
      <Container sx={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", backgroundColor: "white", padding: "15px", borderRadius: "5px", width: { xs: "100%", md: "100%" } }}>
        <Grid container spacing={2}>

          <Grid item xs={12} sm={12} md={12}>
            <Typography variant='h5' sx={{ fontWeight: "bold" }}>Results</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MyTextField
              // -------------------------------------> first Name
              label={"First Name"}
              required={true}
              type={"text"}
              onChange={(e) => { fillModule("firstName", e.target.value) }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MyTextField
              // -------------------------------------> last Name
              label={"Last Name"}
              required={false}
              type={"text"}
              onChange={(e) => { fillModule("lastName", e.target.value) }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Course</InputLabel>
              <Select
                // -------------------------------------> Course 
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={co}
                label="Course"
                onChange={(e) => { fillModule("course", e.target.value) }}
              >
                {course.map((x, i) => {
                  return <MenuItem key={i} value={x.courseName}>{x.courseName}</MenuItem>

                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Section</InputLabel>
              <Select
                // -------------------------------------> Section
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={section}
                label="Section"
                onChange={(e) => { fillModule("section", e.target.value) }}
              >
                {section.map((x, i) => {
                  return <MenuItem value={x.section}>{x.section}</MenuItem>
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MyTextField
              // -------------------------------------> Contact
              label={"Contact : 0310xxxxxxx"}
              required={true}
              type={"text"}
              onChange={(e) => { fillModule("contact", e.target.value) }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MyTextField
              // -------------------------------------> CNIC
              label={"CNIC : 92431.xxxxxxx.xxx"}
              required={true}
              type={"text"}
              onChange={(e) => { fillModule("cnic", e.target.value) }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MyTextField
              // -------------------------------------> Father Name
              label={"Fathe Name"}
              required={true}
              type={"text"}
              onChange={(e) => { fillModule("fatherName", e.target.value) }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MyTextField
              // -------------------------------------> Father CNIC
              label={"Father CNIC : 92431.xxxxxxx.xxx"}
              required={true}
              type={"text"}
              onChange={(e) => { fillModule("fatheCnic", e.target.value) }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MyTextField
              // -------------------------------------> Father Contact
              label={"Father Contact: 0321xxxxx...."}
              required={true}
              type={"text"}
              onChange={(e) => { fillModule("FatherContact", e.target.value) }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MyTextField
              // -------------------------------------> Emergency Contact
              label={"Emergency Contact"}
              required={true}
              type={"text"}
              onChange={(e) => { fillModule("emergencyContact", e.target.value) }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Button variant="contained" sx={{ backgroundImage: "linear-gradient( 109.6deg, rgb(107 155 227) 11.2%, rgba(110,123,251,1) 91.1% );" }} disabled={btnDisabled} onClick={sendStdData}>Submit Form</Button>
          </Grid>
        </Grid>
      </Container></>
  )
}
