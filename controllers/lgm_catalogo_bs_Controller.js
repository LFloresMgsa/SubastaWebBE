import lgm_catalogo_bs_Controller from "../controllers/BlogControllers.js";

export const getAllCatalogo = async (req, res) => {
    try {
        const catalogos = await lgm_catalogo_bs_Controller.findAll()
        res.json(catalogos)

    } catch (error) {
        res.json({ message: error.message } )
    }
}
