const mongoose = require('mongoose');

const mineralSchema = new mongoose.Schema({
        Nome_Planta: {
            type: String,
            required: true,
        },
		Ferro: {
            type: Number,
            required: false,
        },    
		Magnesio: {
            type: Number,
            required: false,
        },    
		Hidrogenio: {
            type: Number,
            required: false,
        },    
		Nitrogenio: {
            type: Number,
            required: false,
        },    
		Enxofre: {
            type: Number,
            required: false,
        },    
		P2O5: {
            type: Number,
            required: false,
        },    
		K2O: {
            type: Number,
            required: false,
        },    
		Calcio: {
            type: Number,
            required: false,
        },    
		Boro: {
            type: Number,
            required: false,
        },    
		Cloro: {
            type: Number,
            required: false,
        },    
		Molibdenio: {
            type: Number,
            required: false,
        },    
		Cobre: {
            type: Number,
            required: false,
        },    
		Manganes: {
            type: Number,
            required: false,
        },    
		Zinco: {
            type: Number,
            required: false,
        },    
		Cobalto: {
            type: Number,
            required: false,
        },    
		Aluminio: {
            type: Number,
            required: false,
        },    
		Potassio: {
            type: Number,
            required: false,
        },    
		Fosforo: {
            type: Number,
            required: false,
        },    
		Ph_CaCl2: {
            type: Number,
            required: false,
        },    
		H_mais_Al: {
            type: Number,
            required: false,
        },    
		pH_SMP: {
            type: Number,
            required: false,
        },    
		Soma_de_Bases_SB: {
            type: Number,
            required: false,
        },    
		saturação_por_Bases_V: {
            type: Number,
            required: false,
        },    
		saturação_por_aluminio_m: {
            type: Number,
            required: false,
        },    
		materia_organica_MO: {
            type: Number,
            required: false,
        },    
		carbono_organico_CO: {
            type: Number,
            required: false,
        },    
		capac_troca_cations_efetiva_t: {
            type: Number,
            required: false,
        },    
		capac_troca_cations_a_Ph7_T: {
            type: Number,
            required: false,
        },    
		Ca_por_Mg: {
            type:  Number,
            required: false,
        },    
		Ca_por_K: {
            type: Number,
            required: false,
        },    
		Mg_por_K: {
            type: Number,
            required: false,
        },    
		Ca_mais_Mg_por_K: {
            type: Number,
            required: false,
        },    
		Ca_por_T: {
            type: Number,
            required: false,
        },    
		Mg_por_T: {
            type: Number,
            required: false,
        },    
		K_por_T: {
            type:	Number,
            required: false,
        },    
		Al_por_T: {
            type:	Number,
            required: false,
        },    
		H_por_T: {
            type:	Number,
            required: false,
        },    
		H_mais_Al_por_T: {
            type:	Number,
            required: false,
        },    
		Ca_mais_Mg_por_T: {
            type:	Number,
            required: false,
        },    
		Ca_mais_Mg_mais_K_mais_Na_por_T: {
            type: Number,
            required: false,
        },    
		Areia_Grossa: {
            type: Number,
            required: false,
        },    
		Areia_Fina: {
            type: Number,
            required: false,
        },    
		Areia_Total: {
            type: Number,
            required: false,
        },    
		Silte: {
            type: Number,
            required: false,
        },    
		Argila: {
            type: Number,
            required: false,
        },    
		Classificcao_Textural: {
            type: Number,
            required: false,
        },    
		Textura_Tipo: {
            type: Number,
            required: false,
        },    
        CreatedAt: {
            type: Date,
            default: Date.now,
        },
})

mongoose.model('Minerais', mineralSchema);