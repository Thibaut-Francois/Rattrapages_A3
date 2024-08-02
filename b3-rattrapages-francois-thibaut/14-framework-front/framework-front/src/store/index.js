import { createStore } from 'vuex'

export default createStore({
  state: {
    Products: [
        {
            title: '20 mini croque-monsieur',
            slug: '20-mini-croque-monsieur',
            description: 'Ces 20 mini croque-monsieur, format dégustation, mélangent délicatement jambon, béchamel et emmental. Prêts à servir après 8 minutes au four, ils sont toujours appréciés pour leur moelleux au cœur et leur croustillant à chaque bouchée, à vous de céder à la tentation !',
            price: 5,
            quantity: 0,
            rating: 4,
            available: false,
            imagePath: 'https://www.picard.fr/dw/image/v2/AAHV_PRD/on/demandware.static/-/Sites-catalog-picard/default/dwa17345da/produits/000000000000047344_E.jpg?sw=672&sh=392&q=30',
            expirationDate: '2025-08-04',
            addDate: '2024-08-04',
            category: 'Viande_et_Poisson'
        },
        {
            title: 'Filets de merlan, panure croustillante,4 à 6 filets',
            slug: 'filets-de-merlan',
            description: 'Le merlan fait une entrée très remarquée dans la famille des filets de poissons panés Picard. Sous sa panure légère et croustillante à souhait, vous découvrez sa chair moelleuse et son goût délicat dès la première bouchée. Simplement doré au four ou à la poêle, quelques gouttes de citron suffisent pour révéler le meilleur de sa saveur. Suite aux difficultés d’approvisionnement sur certaines matières premières liées à la guerre en Ukraine, des changements ont été apportés dans la recette du produit.',
            price: 8,
            quantity: 911,
            rating: 5,
            available: true,
            imagePath: 'https://www.picard.fr/dw/image/v2/AAHV_PRD/on/demandware.static/-/Sites-catalog-picard/default/dwb4c36087/produits/poissons-crustaces/edition/000000000000019934_E1.jpg?sw=672&sh=392&q=30',
            expirationDate: '2025-08-04',
            addDate: '2024-08-04',
            category: 'Viande_et_Poisson'
        },
        {
            title: 'Haricots verts bio, France ou Italie',
            slug: 'hariots-verts-bio',
            description: 'Poussés sous le soleil, ces haricots verts bio entiers et non calibrés sont préparés à partir de gousses fraîches soigneusement triées, éboutées et lavées avant d’êtres blanchies et surgelées. Ce procédé strictement respecté par nos producteurs vous garantit une vraie qualité de produit pour accompagner vos viandes et poissons.',
            price: 3,
            quantity: 99999,
            rating: 3,
            available: true,
            imagePath: 'https://www.picard.fr/dw/image/v2/AAHV_PRD/on/demandware.static/-/Sites-catalog-picard/default/dwc1935fed/produits/legumes/edition/000000000000010131_E1.jpg?sw=672&sh=392&q=30',
            expirationDate: '2025-08-04',
            addDate: '2024-08-04',
            category: 'Légumes_et_Fruits'
        },
        {
            title: 'Salade de fruits rouges et pêches blanches',
            slug: 'salade-de-fruits-rouges',
            description: 'Partagez pour les beaux jours cette délicieuse et douce salade de fruits, pêches blanches, et fruits rouges fraise et blueberry avec une sauce à l’hibiscus et à la menthe. Facilement portionnable, elle apportera une touche de fraîcheur à tous vos repas !',
            price: 7,
            quantity: 0,
            rating: 1,
            available: false,
            imagePath: 'https://www.picard.fr/dw/image/v2/AAHV_PRD/on/demandware.static/-/Sites-catalog-picard/default/dwdf91d69b/produits/00000000000000068090_E.jpg?sw=672&sh=392&q=30',
            expirationDate: '2025-08-04',
            addDate: '2024-08-04',
            category: 'Légumes_et_Fruits'
        },
        {
            title: '2 merveilleux au chocolat',
            slug: '2-merveilleux-au-chocolat',
            description: 'Il suffit de les regarder pour avoir envie de les croquer ! Laissez-vous tenter par ces merveilleux au chocolat et craquez pour leur meringue et leurs copaux de chocolat !',
            price: 5,
            quantity: 0,
            rating: 3,
            available: true,
            imagePath: 'https://www.picard.fr/dw/image/v2/AAHV_PRD/on/demandware.static/-/Sites-catalog-picard/default/dw4575458f/produits/00000000000000082815_E.jpg?sw=672&sh=392&q=30',
            expirationDate: '2025-08-04',
            addDate: '2024-08-04',
            category: 'Desserts'
        },
        {
            title: 'Assortiment de 6 mochis glacés',
            slug: 'assortiment-de-6-mochis-glaces',
            description: 'Accordez-vous une pause fraîcheur avec cette version originale de mochis glacés en forme de cœur et leurs parfums inédits : framboise-gingembre et mangue-coco. Parfait pour partager à deux !',
            price: 10,
            quantity: 42,
            rating: 2,
            available: true,
            imagePath: 'https://www.picard.fr/dw/image/v2/AAHV_PRD/on/demandware.static/-/Sites-catalog-picard/default/dwb08a2ad6/produits/000000000000082340_E.jpg?sw=672&sh=392&q=30',
            expirationDate: '2025-08-04',
            addDate: '2024-08-04',
            category: 'Desserts'
        }
    ]
  },
  mutations: {
        addProduct(state, product) {
            state.Products.push(product);
        },
        removeProduct(state, product) {
            state.Products = state.Products.filter(p => p.slug !== product.slug);
        },
        updateQuantity(state, { Slug, quantity }) {
            const index = state.Products.findIndex(p => p.slug === Slug);
            if (typeof quantity !== 'number') {
                quantity = parseInt(quantity);
            };
            state.Products[index].quantity = quantity;
            if (quantity === 0) {
                state.Products[index].available = false;
            } else {
                state.Products[index].available = true;
            };
        },
        updateRating(state, { Slug, rating }) {
            const index = state.Products.findIndex(p => p.slug === Slug);
            if (typeof rating !== 'number') {
                rating = parseInt(rating);
            };
            if (rating < 0 || rating > 5) {
                return;
            };
            state.Products[index].rating = rating;
        }
    }
})