import { useState, useContext } from "react";
import "./confin.css";
import{db} from '../firebasee/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { cartContext } from "../contextt/CartContext";

const ContainerFinish = () => {
  const {products,  clear} = useContext(cartContext);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const [error, setError] = useState("");
  const [idventa, setIdventa] = useState("")
  const [full, setFull]= useState(true)
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleEmail2Change = (event) => {
    setEmail2(event.target.value);
  };

  const validar = () => {
    const emailPattern = /^[a-zA-Z0-9._]+[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/;
    if (name.trim() === "") {
      setError("Debe ingresar un nombre y apellido");
      return;
    }
    if (phone.trim() === "") {
      setError("Debe ingresar un teléfono");
      return;
    }
    if (email.trim() === "") {
      setError("Debe ingresar un e-mail");
      return;
    }
    if (!emailPattern.test(email)) {
      setError("Debe ingresar un e-mail válido");
      return;
    }
    if (email.trim() !== email2.trim()) {
      setError("Los email son diferentes");
      return;
    }
    setError("");
    success();
    setFull(false);
  };

  const success = () => {
    const cliente = { nombre:name, phone:phone, email:email };
    const coleVentas= collection(db, 'ventas');
    addDoc(coleVentas, {
        cliente,
        items: products,
        date: serverTimestamp(),
        
    })
    .then(result =>
        setIdventa(result.id))
  };
  

  return (
  <> {full? (<><h1 className="custon-form-title">
        Ingrese sus datos para finalizar el pedido
      </h1>
      <div className=" custon-form ">
        <div className="col-12">
          <label htmlFor="name" className="form-label">
            Nombre y Apellido
          </label>
          <input
            type="text"
            className="form-input mt-1 block w-full"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="phone" className="form-label">
            Teléfono
          </label>
          <input
            type="text"
            className="form-input mt-1 block w-full"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="email" className="form-label">
            E-mail
          </label>
          <input
            type="text"
            className="form-input mt-1 block w-full"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="email2" className="form-label">
            Repetir e-mail
          </label>
          <input
            type="text"
            className="form-input mt-1 block w-full"
            id="email2"
            value={email2}
            onChange={handleEmail2Change}
          />
        </div>
        <div className="col-12 text-right">
          <div className="custon-form-error">{error}</div>
         <button className="mt-10 w-full bg-zinc-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={validar } >
            Finalizar Compra
          </button>
        </div>
      </div></>):<>
      <div className='m-40 pt-6 pb-6 text-center  bg-zinc-600'><div className=' text-white text-2xl'>Gracias por su compra su codigo es: ( {idventa} )  
      Por favor comunicate con nosotros.
      </div></div>
      <div>
        </div></>
   }</>

     
  
  );
};
export default ContainerFinish