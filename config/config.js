//Archivo config solo con el Port, se creo para configuraciones futuras...

module.exports = {
    PORT: process.env.PORT || 8000,
    TOKEN_EXPIRED: process.env.TOKEN_EXPIRED = 60 * 60 * 24,
    SEED: process.env.SEED = 'seed-oraculus'
};