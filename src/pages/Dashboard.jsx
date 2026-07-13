import {
  Grid,
  Paper,
  Typography,
} from "@mui/material";

export default function Dashboard() {
  const cards = [
    {
      title: "Beneficiaries",
      value: "12,450",
    },
    {
      title: "Communities",
      value: "185",
    },
    {
      title: "Industrial Parks",
      value: "8",
    },
    {
      title: "Documents",
      value: "1,225",
    },
    {
      title: "Assets",
      value: "R14.2M",
    },
    {
      title: "Funding",
      value: "R850M",
    },
  ];

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        {cards.map((card) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={card.title}
          >
            <Paper
              elevation={3}
              sx={{
                p: 3,
              }}
            >
              <Typography variant="h6">
                {card.title}
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  mt: 2,
                  fontWeight: "bold",
                }}
              >
                {card.value}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
}