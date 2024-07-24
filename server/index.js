import express from "express";
import cors from "cors"

// SDK de Mercado Pago
import { MercadoPagoConfig, Preference } from 'mercadopago';
// Agrega credenciales
const client = new MercadoPagoConfig({ 
    accessToken: 'TEST-8148597280035502-071911-3dd1f44391cdcda2b4b8a617cbe2c0ed-1141992907' 
});

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("soy el server :)");
});

app.post("/create_preference", async (req, res) => {
    console.log('Request body:', req.body);
    try {
        const { title, quantity, price } = req.body;
        if (!title || !quantity || !price) {
            throw new Error('Missing required fields');
        }else{
            const body = {
                items: [
                    {
                        title: title,
                        quantity: Number(quantity),
                        unit_price: Number(price),
                        currency_id: "ARS",
                    },
                ],
                back_urls: {
                    //luego cambiar los https de la pagina una ves subida
                    success: "https://www.youtube.com/watch?v=Y3KNjJgYkpk",
                    failure: "https://www.youtube.com/watch?v=-VD-l5BQsuE&t=0s",
                    pending: "",
                },
                auto_return: "approved",
            };
            const preference = new Preference(client);
            const result = await preference.create({ body });
            console.log('Mercado Pago API response:', result);
            res.json({
                id: result.id,
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Error al crear la preferencia :(",
        })
    }
})

app.listen(port, () => {
    console.log(`El servidor esta corriendo en el puerto ${port}`);
})