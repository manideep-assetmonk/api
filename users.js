/**
 * express library for handling of server requests
 */
const express = require('express')
const app=express()
const router = express.Router()
const User= require('./modules/app')
 




// to get all details 
router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)

    }
    catch (err) {
        res.send('Error' + err)
    }
})
// to get  details by id
router.get('/:id', async (req, res) => {
    try {
        const users = await User.findById(req.params.id)
        res.json(users)

    }
    catch (err) {
        res.send('Error' + err)
    }
})
// to creat or update details


router.post('/', async (req, res) => {
 
    const users = new User({
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address
    })
    try {
        
        const a1 = await users.save()
        res.json(a1)
    
    }
    catch (err) {
        res.send('Error')
    }
})
// applies partial modifications to a resource
router.patch('/:id',getUser, async (req, res) => {
    if(req.body.name!=null){
        res.user.name=req.body.name
    }
    if(req.body.phone!=null){
        res.user.phone=req.body.phone
    }
    if(req.body.address!=null){
        res.user.address=req.body.address
    }
    try {
        const update=await res.user.save()
        res.json(update)
    } catch (err) {
        res.send('Error')
    }
})

router.delete('/:id',getUser, async (req, res) => {
    try {
        await res.user.remove()
        res.json({ message: 'user sucessfully deleted' })
        
    }
    catch (err) {
        res.send('Error')
    }
})
async function getUser(req, res, next) {
    let user
    try {
        user = await User.findById(req.params.id)
        if (user == null) {
            return res.status(201).json({ message: 'cannot find user' })

        }
    }
    catch (err) {
        return res.status(400).json({ message: err.message })
    }
    res.user = user
    next()

}
module.exports = router