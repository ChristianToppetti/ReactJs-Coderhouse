import {initializeApp} from "firebase/app";
import {getFirestore, collection, getDocs, getDoc, addDoc, doc, query, where, writeBatch} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC1GtsxfIfmDi4cLIhvBVTNLpprlA-P2Fs",
  authDomain: "coder-react-ff490.firebaseapp.com",
  projectId: "coder-react-ff490",
  storageBucket: "coder-react-ff490.appspot.com",
  messagingSenderId: "451071269424",
  appId: "1:451071269424:web:c089e195c002abcead2bf5"
}

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)

export async function getProductsArr(query=null) {
    const productsSnapshot = await getDocs(query ? query : collection(db, "products"))
    const dataDocs = productsSnapshot.docs.map(doc => { return {...doc.data(), id: doc.id} })

    return dataDocs
}

export async function getProduct(id) {
  const docRef = doc(db, "products", id)
  const docSnap = await getDoc(docRef)

  if(!docSnap.exists()) {
    return -1
  }
    
  return {...docSnap.data(), id: docSnap.id} 
}

export async function getCategory(catId) {
  const colRef = collection(db, "products")
  const q = query(colRef, where("type", "==", catId) )

  return getProductsArr(q)
}

export async function createOrder(order) {
  const orderColRef = collection(db, "orders")
  const batch = writeBatch(db)
  const {cart: cartItems} = order

  for (let item of cartItems) {
    const product = await getProduct(item.product.id)

    const newStock = product.stock - item.q

    if(newStock < 0) {
      throw new Error(`No hay stock suficiente del producto "${product.name}" - ID:${product.id}`)
    } 
    else {
      product.stock = newStock
      const productDocRef = doc(db, "products", product.id)
      batch.update(productDocRef, {stock: newStock})
    }
  }

  await batch.commit();
  const response = await addDoc(orderColRef, order)

  return response.id
}