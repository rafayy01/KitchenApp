import "./App.css";
import { toast, ToastContainer } from "react-toastify";
import NavBar from "./components/Navbar/Navbar";
import User from "./pages/User/User";
import Container from "react-bootstrap/Container";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ingredients from "./pages/Meal/Ingredients/Ingredients";
import Meal from "./pages/Meal/Meal";
import MealForm from "./pages/Meal/crud/Form/MealForm";
import AddMeal from "./pages/Meal/crud/Add";
import Clients from "./pages/clients/Clients";
import DetailMeal from "./pages/Meal/crud/DetailMeal";
import ClientSubsctiption from "./pages/oldClients/ClientSubscription";
import EditMeal from "./pages/Meal/crud/Edit";
import MealCategory from "./pages/lookups/MealCategory/MealCategory";
import EditMealCategory from "./pages/lookups/MealCategory/crud/Edit";
import MealMeasurementList from "./pages/lookups/MealMeasurement/MealMeasurementList";
import EditMealMeasurement from "./pages/lookups/MealMeasurement/crud/Edit";
import AddMealMeasurement from "./pages/lookups/MealMeasurement/crud/Add";
import AddMealCategory from "./pages/lookups/MealCategory/crud/Add";
import AddClient from "./pages/clients/crud/Add";
import EditClient from "./pages/clients/crud/Edit";
import Subs from "./pages/Subs/Subs";
import PreRound from "./pages/CookingRound/PreRound";
import Rounds from "./pages/CookingRound/Rounds";
import { preRoundContext } from "./Contexts/PreRound";
import { useState } from "react";

function App() {
  const [preRoundData, setPreRoundData] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [addOnList, setAddOnList] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [carbsList, setCarbsList] = useState([]);

  return (
    <preRoundContext.Provider
      value={{
        preRoundData,
        setPreRoundData,
        categoryList,
        setCategoryList,
        addOnList,
        setAddOnList,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        carbsList,
        setCarbsList,
      }}
    >
      <BrowserRouter>
        <Container fluid>
          <ToastContainer />
          <NavBar />
          <Routes>
            <Route exact path="/" element={<User />} />
            <Route exact path="/cookinground" element={<PreRound />} />
            <Route exact path="/rounds" element={<Rounds />} />

            {/* Meal Routes */}
            <Route exact path="/meal" element={<Meal />} />
            <Route exact path="/meal/addMeal" element={<AddMeal />} />
            <Route exact path="/meal/editMeal/:id" element={<EditMeal />} />
            <Route exact path="/meal/detailmeal/:id" element={<DetailMeal />} />

            {/* Ingredient Routes */}
            <Route
              exact
              path="/Meal/Ingredients/:id"
              element={<Ingredients />}
            />

            {/* MealCategory Routes */}
            <Route exact path="/mealCategory/list" element={<MealCategory />} />
            <Route
              exact
              path="/mealCategory/addMealCategory"
              element={<AddMealCategory />}
            />
            <Route
              exact
              path="/mealCategory/editMealCategory/:id"
              element={<EditMealCategory />}
            />
            {/* <Route exact path="/mealCategory/detailmeal/:id" element={<DetailMeal />} /> */}

            {/* Clients and subscriptions management */}
            <Route exact path="/clients" element={<Clients />} />
            <Route exact path="/clients/add" element={<AddClient />} />
            <Route exact path="/clients/edit/:id" element={<EditClient />} />
            {/* <Route exact path="/clients/subscriptions/add" element={<AddClient />} /> */}
            {/* <Route exact path="/clients/manage/:id" element={<ClientSubsctiption />} /> */}

            {/* <Route exact path="Subscriptions" element={<Subscriptions />} /> */}

            {/* MealMeasurement Routes */}
            <Route
              exact
              path="/mealMeasurement/list"
              element={<MealMeasurementList />}
            />
            <Route
              exact
              path="/mealMeasurement/addMealMeasurement"
              element={<AddMealMeasurement />}
            />
            <Route
              exact
              path="/mealMeasurement/editMealMeasurement/:id"
              element={<EditMealMeasurement />}
            />
            {/* <Route exact path="/mealMeasurement/detailMeasurement/:id" element={<DetailMeal />} /> */}
            <Route exact path="/subs" element={<Subs />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </preRoundContext.Provider>
  );
}

export default App;
