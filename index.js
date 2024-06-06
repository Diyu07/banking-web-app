const express = require('express');

const app = express();
const PORT = 3000;

// ROUTES

app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`))