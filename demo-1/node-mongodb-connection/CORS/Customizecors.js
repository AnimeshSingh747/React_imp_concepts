const corsOptions = {
    origin: 'http://frontend.com',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    Credentials: true 
};

app.use(cors(corsOptions));