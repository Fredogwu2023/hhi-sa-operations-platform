import { Card, CardContent, Typography } from "@mui/material";

export default function StatCard({ title, value }) {
  return (
    <Card
      elevation={3}
      sx={{
        borderRadius: 3,
        height: 140,
      }}
    >
      <CardContent>
        <Typography
          color="text.secondary"
          gutterBottom
        >
          {title}
        </Typography>

        <Typography
          variant="h3"
          fontWeight="bold"
        >
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}