import Products from "../Models/product.model.js"

export const getProducts = async (req, res) => {
  try {
    const products = await Products.find({})
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }

}

export const getProduct = async (req, res) => {
  try {
    const { id } = req.params
    const product = await Products.findById(id)
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const createProduct = async (req, res) => {
  try {
    const products = await Products.create(req.body)
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const UpdateProduct = async (req, res) => {
  try {
    const { id } = req.params
    const product = await Products.findByIdAndUpdate(id, req.body)
    if (!product) {
      return res.status(404).json({ message: "Product Not Found" })
    }
    const UpdatedProduct = await Products.findById(id)
    res.status(200).json(UpdatedProduct)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params

    const product = await Products.findByIdAndDelete(id)

    if (!product) {
      return res.status(404).json({ message: "Product Not Found" })
    }

    res.status(200).json({ message: "Product deleted successfully!" })

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}



