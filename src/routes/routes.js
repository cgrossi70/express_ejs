import { Router } from 'express';

const router = Router();

const lista = [
  {'email': 'email@example.com', 'name': 'Example 1'},
  {'email': 'email@gmial.com.com', 'name': 'Example 2'},
]
const lista_vacia = []

router.get('/',(req, res) => {
  res.render('pages/index',{title: 'Home'})
})

router.get('/about',(req, res) => {
  res.render("pages/about",{title: 'About'})
})

router.get('/list',(req, res) => {
  res.render("pages/list",{title: 'About', lista: lista, lista_vacia: lista_vacia})
})

export default router