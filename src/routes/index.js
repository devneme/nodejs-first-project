import {Router} from 'express'

const router = Router()

router.get('/', (req, res) => res.render('index.ejs', { title: 'SISCOLSI SAS' }))

router.get('/about', (req, res) => res.render('about.ejs', {title: 'Acerca de nosotros'}))

router.get('/contact', (req, res) => res.render('contact.ejs', {title: 'Contáctanos'}))

router.get('/services', (req, res) => res.render('services.ejs', {title: 'Módulos'}))

router.get('/software', (req, res) => res.render('software.ejs', {title: 'Software SISS'}))

router.get('/login', (req, res) => res.render('login.ejs', {title: 'SISS APP'}))

export default router