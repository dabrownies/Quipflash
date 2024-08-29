'use client'
import Image from "next/image";
import { AppBar, Toolbar, Typography, Button, Box, Container, Grid, Card, CardContent } from "@mui/material";
import Head from "next/head";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { StyleOutlined, PsychologyOutlined, DevicesOutlined, StorageOutlined, MoneyOff, CloseRounded, CheckRounded} from "@mui/icons-material";
import getStripe from "@/utils/get-stripe";



export default function Home() {

  return (
    <div style={{ backgroundColor: '#171618', color: '#fff', minHeight: '100vh' }}>
    <NavBar />
    <Box maxWidth="100vw">
      <HeroSection />
      <KeyFeatures />
      <Pricing />
    </Box>
  </div>
);
}

function NavBar() {
return (
  <AppBar position="static" style={{ backgroundColor: '#171618',}}>
    <Toolbar>
      <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontFamily: 'Inter, sans-serif', fontWeight: 580,}}>
        <StyleOutlined 
          sx={{
            marginRight: 1,
            marginBottom: '-8px',
            fontSize: '2rem',
          }}
        />
        QuipFlash
      </Typography>
      <SignedOut>
        <Button href= "/sign-in" color="inherit"
          sx={{
            fontFamily: 'Inter', 
            fontWeight: 300,
            color: '#fff',
            }}
        >
          Login
        </Button>
        <Button href= "/sign-up" variant="outlined" 
          sx={{ 
            marginLeft: 2, 
            border: '2px solid #460879', 
            backgroundColor: "#320259",
            borderRadius: 24,
            color: '#fff',
            fontFamily: 'Inter',
            fontWeight: 300,
            
            '&:hover': {
              border: "2px solid #5b1d85",
              color: "white",
              background: `linear-gradient(to right, #320259, #320259, #320259, #320259, #460c75, #5e1797, #7126ae, #9345d3)`,
              backgroundSize: "200% 200%",
              animation: "gradientShift 3s ease infinite",
            },

            '@keyframes gradientShift': {
              '0%': {
                backgroundPosition: '0% 0%',
             },
              '50%': {
                backgroundPosition: '100% 100%',
              },
              '100%': {
                backgroundPosition: '0% 0%',
              },
            },

            }}
          >
            Sign Up
        </Button>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </Toolbar>
  </AppBar>
);
}

function HeroSection() { {/**#320259, #460c75, #5e1797, #7126ae, #942da2, #9345d3, #b462f7, #c17ef8, #cc94fa */}
return (
  <Box
    sx={{ 
      padding: '4rem 0', 
      background: 'radial-gradient(circle closest-corner, #7126ae, #7126ae, #7126ae, #942da2, #9345d3, #b462f7, #c17ef8, #cc94fa)',
      backgroundSize: "200% 200%",
      animation: "gradientShift 38s ease infinite",

      '@keyframes gradientShift': {
        '0%': {
           backgroundPosition: '0% 0%',
        },
        '50%': {
            backgroundPosition: '100% 100%',
        },
        '100%': {
            backgroundPosition: '0% 0%',
        },
      },
    }}
  >
    <Grid container spacing={3} alignItems="center">
      <Grid item xs={12} md={6}>
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{
            color: '#ececec', 
            fontFamily: 'Inter', 
            fontWeight: 570, 
            marginLeft: 47, 
            marginBottom: 2,
            marginTop: '73px',
            fontSize: '1.95rem',
            maxWidth: '600px',
            }}
          >
          Change The Way You Learn.
        </Typography>
        <Typography 
          variant="h7" 
          paragraph 
          sx={{
            color: '#ececec', 
            fontFamily: 'Inter', 
            fontWeight: 397, 
            fontSize: '1rem', 
            lineHeight: 1.5, 
            maxWidth: '500px',
            marginLeft: 47,
            marginBottom: 10, 
            }}
          >
          Unleash your learning potential with our AI-driven flashcard generator. 
          Create and save flashcards sets, 
          access and study from home or on the go, 
          and save your sets in our cloud.
        </Typography>
        <Button 
          variant="contained"
          href="/generate"
          sx={{ 
            marginLeft: 47,
            marginTop: '-100px',
            border: '2px solid #460879', 
            backgroundColor: "#320259",
            borderRadius: 24,
            color: '#fff',
            fontFamily: 'Inter',
            fontWeight: 500,
              
            '&:hover': {
              border: "2px solid #5b1d85",
              color: "white",
              background: `linear-gradient(to right, #320259, #320259, #320259, #320259, #460c75, #5e1797, #7126ae, #9345d3)`,
              backgroundSize: "200% 200%",
              animation: "gradientShift 3s ease infinite",
            },
  
            '@keyframes gradientShift': {
              '0%': {
                  backgroundPosition: '0% 0%',
              },
              '50%': {
                  backgroundPosition: '100% 100%',
              },
              '100%': {
                  backgroundPosition: '0% 0%',
              },
            },
          }}
        >
          Get Started
        </Button>
      </Grid>
      <Grid item xs={12} md={6}>
      </Grid>
    </Grid>
  </Box>
);
}

function KeyFeatures() {
return (
  <Box 
    sx={{ 
      padding: '4rem 0', 
      backgroundColor: '#171618',
    }}
  >
    <Grid container spacing={3} alignItems="center">
      <Grid item xs={12} md={6}>
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{
            color: '#ececec', 
            fontFamily: 'Inter', 
            fontWeight: 570, 
            marginLeft: 47, 
            marginBottom: 2,
            marginTop: '5px',
            fontSize: '1.95rem',
            maxWidth: '600px',
            }}
        >
          Key Features
        </Typography>
          <Typography 
            sx={{
              color: '#ececec', 
              fontFamily: 'Inter', 
              fontWeight: 420, 
              fontSize: '1.2rem', 
              lineHeight: 2.3, 
              marginLeft: 47, 
            }}
          >
            <PsychologyOutlined 
              sx={{
                marginBottom: '-4px',
                marginRight: 1,
              }}
            />
            AI-Generated Flashcards
          </Typography>
          <Typography
            sx={{
              color: '#ececec', 
              fontFamily: 'Inter', 
              fontWeight: 420, 
              fontSize: '1.2rem', 
              lineHeight: 2.3, 
              marginLeft: 47, 
            }}
          >
            <DevicesOutlined 
              sx={{
                marginBottom: '-5px',
                marginRight: 1,
              }}
            />
            Access Anytime, Anywhere
          </Typography>
          <Typography
            sx={{
              color: '#ececec', 
              fontFamily: 'Inter', 
              fontWeight: 420, 
              fontSize: '1.2rem', 
              lineHeight: 2.3, 
              marginLeft: 47, 
            }}
          >
            <StorageOutlined 
              sx={{
                marginBottom: '-5px',
                marginRight: 1,
              }}
            />
            Custom Flashcard Storage
          </Typography>
          <Typography 
            sx={{
              color: '#ececec', 
              fontFamily: 'Inter', 
              fontWeight: 420, 
              fontSize: '1.2rem', 
              lineHeight: 2.3, 
              marginLeft: 47, 
            }}
          >
            <MoneyOff 
              sx={{
                marginBottom: '-5px',
                marginRight: 1,
              }}
            />
            Start Today for Free
          </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
      </Grid>
    </Grid>
  </Box>
);
}

function Pricing() {

  const handleSubmit = async () => {
    const checkoutSession = await fetch('/api/checkout_session', {
      method: 'POST',
      headers: {
        origin: 'http://localhost:3000',
      },
    })
  
    const checkoutSessionJson = await checkoutSession.json()
  
    if(checkoutSession.statusCode === 500) {
      console.error(checkoutSession.message)
      return
    }
  
    const stripe = await getStripe()
    const {error} = await stripe.redirectToCheckout({
      sessionId: checkoutSessionJson.id,
    })
  
    if(error) {
      console.warn(error.message)
    }
  }

  return (
     <Box 
        sx={{
          textAlign: 'center',
          padding: '4rem 0', 
          background: 'radial-gradient(ellipse 60% 120%, #5e1797, #5e1797, #5e1797, #7126ae, #942da2, #9345d3, #b462f7, #c17ef8, #cc94fa)',
          backgroundSize: "200% 200%",
          animation: "gradientShift 0s ease infinite",

          '@keyframes gradientShift': {
            '0%': {
              backgroundPosition: '0% 0%',
            },
            '50%': {
                backgroundPosition: '100% 100%',
            },
            '100%': {
                backgroundPosition: '0% 0%',
            },
          },
        }}
      >
        <Typography 
          variant="h4" 
          gutterBottom
          sx={{
            color: '#ececec', 
            fontFamily: 'Inter', 
            fontWeight: 570, 
            fontSize: '1.95rem',
          }}
        >
           Explore Our Plans
        </Typography>
        <Grid container spacing= {3}>
          <Grid item xs={12} md={6}>
            <Box 
              sx={{
                backgroundColor: '#171618',
                maxWidth: '60%',
                margin: '0 auto',
                p: 20,
                borderRadius: 12,
                position: 'relative',
              }}
            >
              <Typography 
                variant="h5" 
                gutterBottom
                sx={{
                  color: '#ececec', 
                  fontFamily: 'Inter', 
                  fontWeight: 570, 
                  fontSize: '1.95rem',
                  position: 'absolute',
                  top: 25,
                  left: 33,
                }}
              >
                Basic
              </Typography>
              <Typography 
                variant="h6" 
                gutterBottom
                sx={{
                  fontFamily: 'Inter', 
                  fontWeight: 350, 
                  position: 'absolute',
                  top: 65,
                  left: 25,
                }}
              >
                $0.00 / month
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Inter', 
                  fontWeight: 410, 
                  position: 'absolute',
                  top: 125,
                  left: 25,
                }}
              >
                <CheckRounded 
                  sx={{
                    mb: '-7px',
                    mr: 1,
                  }}
                />
                Generate up to 50 flashcards/set
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Inter', 
                  fontWeight: 410, 
                  position: 'absolute',
                  top: 160,
                  left: 25,
                }}
              >
                <CheckRounded 
                  sx={{
                    mb: '-7px',
                    mr: 1,
                  }}
                />
                Basic AI-Generator model
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Inter', 
                  fontWeight: 410, 
                  position: 'absolute',
                  top: 195,
                  left: 25,
                }}
              >
                <CloseRounded 
                  sx={{
                    mb: '-7px',
                    mr: 1,
                  }}
                />
                Unlimited Storage
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Inter', 
                  fontWeight: 410, 
                  position: 'absolute',
                  top: 230,
                  left: 25,
                }}
              >
                <CloseRounded 
                  sx={{
                    mb: '-7px',
                    mr: 1,
                  }}
                />
                Progress Tracking
              </Typography>
              <Button 
                variant="outlined"
                href="/sign-in"
                sx={{
                  color: "white",
                  border: '2px solid #460879', 
                  color: '#fff',
                  fontFamily: 'Inter',
                  fontWeight: 300,
                  boxShadow: "0 0 10px 2px purple",
                  borderRadius: "25px",
                  background: "linear-gradient(to bottom right, #320259, #320259, #320259, #320259, #460c75, #5e1797, #7126ae, #9345d3)",
                  backgroundSize: "200% 200%",
                  animation: 'gradientShift 5s ease infinite',
                  mb: '-235px',
                  '&:hover': {
                    borderColor: "purple",
                    color: "white",
                  },
                  '@keyframes gradientShift': {
                    '0%': {
                      backgroundPosition: '0% 0%',
                   },
                    '50%': {
                      backgroundPosition: '100% 100%',
                    },
                    '100%': {
                      backgroundPosition: '0% 0%',
                    },
                  },
                }}
                >
                  Select
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box 
              sx={{
                backgroundColor: '#171618',
                maxWidth: '60%',
                margin: '0 auto',
                p: 20,
                borderRadius: 12,
                position: 'relative',
              }}
            >
              <Typography 
                variant="h5" 
                gutterBottom
                sx={{
                  color: '#ececec', 
                  fontFamily: 'Inter', 
                  fontWeight: 570, 
                  fontSize: '1.95rem',
                  position: 'absolute',
                  top: 25,
                  left: 33,
                }}
              >
                Premium
              </Typography>
              <Typography 
                variant="h6" 
                gutterBottom
                sx={{
                  fontFamily: 'Inter', 
                  fontWeight: 350, 
                  position: 'absolute',
                  top: 65,
                  left: 25,
                }}
              >
                $9.99 / Month
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Inter', 
                  fontWeight: 410, 
                  position: 'absolute',
                  top: 125,
                  left: 25,
                }}
              >
                <CheckRounded 
                  sx={{
                    mb: '-7px',
                    mr: 1,
                  }}
                />
                Generate up to 50 flashcards/set
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Inter', 
                  fontWeight: 410, 
                  position: 'absolute',
                  top: 160,
                  left: 25,
                }}
              >
                <CheckRounded 
                  sx={{
                    mb: '-7px',
                    mr: 1,
                  }}
                />
                Basic AI-Generator model
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Inter', 
                  fontWeight: 410, 
                  position: 'absolute',
                  top: 195,
                  left: 25,
                }}
              >
                <CheckRounded
                  sx={{
                    mb: '-7px',
                    mr: 1,
                  }}
                />
                Unlimited Storage
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Inter', 
                  fontWeight: 410, 
                  position: 'absolute',
                  top: 230,
                  left: 25,
                }}
              >
                <CheckRounded 
                  sx={{
                    mb: '-7px',
                    mr: 1,
                  }}
                />
                Progress Tracking
              </Typography>
              <Button 
                variant="outlined"
                onClick={handleSubmit}
                sx={{
                  color: "white",
                  border: '2px solid #460879', 
                  color: '#fff',
                  fontFamily: 'Inter',
                  fontWeight: 300,
                  boxShadow: "0 0 10px 2px purple",
                  borderRadius: "25px",
                  background: "linear-gradient(to bottom right, #320259, #320259, #320259, #320259, #460c75, #5e1797, #7126ae, #9345d3)",
                  backgroundSize: "200% 200%",
                  animation: 'gradientShift 5s ease infinite',
                  mb: '-235px',
                  '&:hover': {
                    borderColor: "purple",
                    color: "white",
                  },
                  '@keyframes gradientShift': {
                    '0%': {
                      backgroundPosition: '0% 0%',
                   },
                    '50%': {
                      backgroundPosition: '100% 100%',
                    },
                    '100%': {
                      backgroundPosition: '0% 0%',
                    },
                  },
                }}
              >
                Select
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
  );
}