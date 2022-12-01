import React from 'react';
import './home.css';
import image from '../../assets/home.jpg';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";




const Home = () => {
  return (
    <div className="app__home">
    <div className='home-image'>
        <img src={image } alt="home__image" />
    </div>

    <div className="home__text">
        <div className="home__button">
            <h1>Updates</h1>
            </div>
            <div className="text-title">
                <h1 className="home__text-title">P&R Engineering School, YOUR LIFE,  YOUR COLLEGE ,YOUR WAY. </h1>
        </div>
    </div>

    <div className="home__head">
        <div className="home__head-text">
            <h3>Welcome to P&R Engineering School</h3>
            <h5>The Best College in kenya</h5>

            </div>
    </div>

    <div className="home__body-button">
        <button type='button' className='button button-1'>Apply Now</button>
        <button type='button' className='button button-2'>Students portal</button>
        <button type='button' className='button button-3'>PROSPECTUS</button>

    </div>

    <div className="home__body-cards">
        <div className="home__body-card1">
            <Card className='card1' sx={{ minWidth: 275 }}>
                <CardContent  className='body_text'>
                <Typography variant='h1' sx={{ fontSize: 18 }}  gutterBottom>
                Our Vision
                </Typography>
                <Typography variant="body2">
                To be a leading institution of higher learning in the region, providing quality education and training in engineering and related disciplines.

                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    </div>

    <div className="home__body-card2">
            <Card className='card2' sx={{ minWidth: 275 }}>
                <CardContent className='body_text2'>
                <Typography  variant='h1' sx={{ fontSize: 18 }}  gutterBottom>
                Word of the Day
                </Typography>
                <Typography variant="body2">
                We prepare and empower students to be successful by helping them develop the knowledge, skills and abilities needed to enter or progress within the work force…

                </Typography>
            </CardContent>
            <CardActions>
                <Button className='button2' size="small">Learn More</Button>
            </CardActions>
        </Card>
    </div>

    <div className="home__body-card3">
            <Card className='card3' sx={{ minWidth: 275 }}>
                <CardContent  className='body_text'>
                <Typography variant='h1' sx={{ fontSize: 18 }}  gutterBottom>
                Our Core Values
                </Typography>
                <Typography variant="body2">
                Integrity and transparency - we behave and communicate sincerely and honestly;
                Respect - we treat everyone with dignity and offer superior service;
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    </div>

    <div className="home__body-card4">
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                <Typography variant='h1' sx={{ fontSize: 18 }}  gutterBottom>
                Courses
                </Typography>
                <Typography className='btn course1' variant="h6" component="div">
                School Of ICT
                </Typography>
                <Typography className='btn course2' variant='h6'>
                School Of Engineering
                </Typography>
                <Typography className='btn course3' variant='h6'>
                School Of Business
                </Typography>
                <Typography className='btn course4' variant='h6'>
                School Of Health Sciences
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    </div>

    <div className="home__body-card5">
            <Card className='search_input-card' sx={{ minWidth: 275 }}>
                <CardContent className='search'>
                    <TextField
                    className='search__input'
                        id="outlined-basic"
                        variant="outlined"
                        fullWidth
                        label="Search"
                        />
                    <TextField
                    className='search__input'
                        id="outlined-basic"
                        variant="outlined"
                        fullWidth
                        label="Diploma Courses"
                        />

                    <TextField
                    className='search__input'
                        id="outlined-basic"
                        variant="outlined"
                        fullWidth
                        label="Select Campus"
                        />

            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    </div>

    <div className="home__body-card6">
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                <Typography sx={{ fontSize: 14 }}  gutterBottom>
                Campus News
                </Typography>
                <Typography variant="p" component="div">
                BLOG, BUSINESS, CO CURRICULAR ACTIVITIES, DEPARTMENTAL, DESIGN / BRANDING, DEVELOPMENT, EDUCATION, INTERNATIONAL, LEARNING, MASONRY, MOMBASA CAMPUS, NEWS, TRAINING
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
                </Typography>

                <Typography variant="p" component="div">
                BLOG, BUSINESS, CO CURRICULAR ACTIVITIES, DEPARTMENTAL, DESIGN / BRANDING, DEVELOPMENT, EDUCATION, INTERNATIONAL, LEARNING, MASONRY, MOMBASA CAMPUS, NEWS, TRAINING
                </Typography>

            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    </div>


    </div>

    <div className="home__body-button">
        <button type='button' className='button button-1'>Apply Now</button>
    </div>



</div>
    
  )
}

export default Home