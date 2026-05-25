const { z } = require('zod')

const productSchema = z.object({

  name: z
    .string()
    .min(1, 'El nombre es obligatorio'),

  category: z
    .string()
    .min(1, 'La categoría es obligatoria'),

  price: z
    .number({
      invalid_type_error: 'El precio debe ser número'
    }),

  stock: z
    .number({
      invalid_type_error: 'El stock debe ser número'
    }),

  image: z
    .string()
    .min(1, 'La imagen es obligatoria')

})

module.exports = productSchema

