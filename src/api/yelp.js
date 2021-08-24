import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
            'Bearer CgBuer6pyDQOdRulB_NSSrbAAi01hJi6PvRnZbtd_NqpnXR-ap20Q4eNVgjep1X1nNOUNzHE6KixkHuWMYFTxCI34GQ7MtB1bMTysgxWMHqbhuKFzHeIm0kjDgkkYXYx',

    }
})