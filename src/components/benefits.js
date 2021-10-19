import React from 'react'
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck"
import AodOutlinedIcon from "@mui/icons-material/AodOutlined"
import Typography from "@mui/material/Typography"
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined"

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
)

const benefits = () => {
    return (
      <div className="flex flex-col md:flex-row flex-nowrap">
        <Card className="m-2 p-3">
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              className="text-indigo-600 tracking-wider"
              gutterBottom
            >
              <PlaylistAddCheckIcon />
              Organisation
            </Typography>
            <Typography variant="h5" component="div">
              Strukturierter Überblick
            </Typography>
            <Typography sx={{ mb: 2.5 }} color="text.secondary">
              mit höchstens 3 Klicks am Ziel!
            </Typography>
            <Typography variant="body2">
              Der Thought Collector speichert alle deine Notizen und Learnings
              strukturiert und geordnet. Du kannst ganz einfach deine Notizen
              favoritisieren oder sie mit Schlagwörtern labeln. Auf eigenen
              Seiten siehst du dann nur die Notizen, die du gerade brauchst.
            </Typography>
          </CardContent>
        </Card>

        <Card className="m-2 p-3">
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              className="text-indigo-600 tracking-wider"
              gutterBottom
            >
              <StickyNote2OutlinedIcon />
              Fexibilität
            </Typography>
            <Typography variant="h5" component="div">
              Alle Notizen
            </Typography>
            <Typography sx={{ mb: 2.5 }} color="text.secondary">
              immer und überall für dich bereit
            </Typography>
            <Typography variant="body2">
              Mit dem Thought Collector hast du alle deine Notizen immer mobil
              parat. Du brauchst eine Info, die du dir aufgeschreiben hast oder
              willst einen Gedanken festhalten? Zücke infach schnell dein Handy
              und du hast alles, was du brauchst.
            </Typography>
          </CardContent>
        </Card>

        <Card className="m-2 p-3">
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              className="text-indigo-600 tracking-wider"
              gutterBottom
            >
              <AodOutlinedIcon />
              Digitalisiert
            </Typography>
            <Typography variant="h5" component="div">
              Saubere Bücher
            </Typography>
            <Typography sx={{ mb: 2.5 }} color="text.secondary">
              kein Gekritzel in Büchern mehr
            </Typography>
            <Typography variant="body2">
              Jetzt kannst du deine Büchern und Artikel ohne Bedenken im
              Oroginalzustand lassen. Keine Bleistiftnotizen am Rand mehr und
              auch keinen Textmarker. Mit der App kannst du alles digital
              auschreiben und nach Bedarf verändern.
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
}

export default benefits
