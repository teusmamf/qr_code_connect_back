import app from './app.js';
import customerRoutes from './routes/CustomerRoutes.js';
import addressRoutes from './routes/AddressRoutes.js';
import { associateModels } from './models/associateModels.js';
import companyRoutes from './routes/CompanyRoutes.js';
import categoryRoutes from './routes/CategoryRoutes.js'
import eventRoutes from './routes/EventRoutes.js';
import ticketRouter from './routes/TicketRoutes.js';
import transactionsRouter from './routes/TransactionsRoutes.js';
import walletRouter from './routes/WalletRoutes.js';

const PORT = process.env.PORT;

app.use(`${process.env.API_BASE}/customers`, customerRoutes);
app.use(`${process.env.API_BASE}/addresses`, addressRoutes);
app.use(`${process.env.API_BASE}/companies`, companyRoutes);
app.use(`${process.env.API_BASE}/category`, categoryRoutes);
app.use(`${process.env.API_BASE}/events`, eventRoutes);
app.use(`${process.env.API_BASE}/transactions`, transactionsRouter);
app.use(`${process.env.API_BASE}/ticket`,ticketRouter);
app.use(`${process.env.API_BASE}/wallet`,walletRouter);

app.listen(PORT, '0.0.0.0',() => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
