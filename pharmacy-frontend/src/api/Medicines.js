axios.get('http://localhost:5000/api/medicines')

app.use(cors({ origin: 'http://localhost:3000' }));