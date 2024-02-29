import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  Pressable
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => console.log("Botón de regreso presionado")}>
          <Image
            source={require("./Imagenes/atras.png")}
            style={styles.backIcon}
          />
        </Pressable>
        <View style={styles.searchBar}>
          <Image
            source={require("./Imagenes/lupa.png")}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar"
            placeholderTextColor="gray"
          />
        </View>
        <Pressable onPress={() => console.log("Botón de carrito presionado")}>
          <Image
            source={require("./Imagenes/carrito.png")}
            style={styles.cartIcon}
          />
        </Pressable>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.card}>
          <Image
            source={require("./Imagenes/product.png")}
            style={styles.cardImage}
          />
          <View style={styles.promotionLabel}>
            <Text style={styles.promotionLabelText}>PROMOCION</Text>
          </View>
          <View style={styles.heartContainer}>
            <Image
              source={require("./Imagenes/corazon.png")}
              style={styles.hearIcon}
            />
          </View>
          <Pressable onPress={() => setModalVisible(true)}>
          </Pressable>
          <View style={styles.additionalInfoContainer}>
            <View style={styles.additionalInfoTextContainer}>
              <Text style={styles.additionalInfoText}>
                Planta inteligente WIFI NHB-C110
              </Text>
            </View>
            <View style={styles.additionalInfoTextContainer}>
              <Text style={[styles.additionalInfoText, styles.extra]}>
                $349
              </Text>
            </View>
            <View style={styles.additionalInfoTextContainer}>
              <Text style={styles.additionalInfoText}>$209</Text>
            </View>
            <View style={styles.additionalInfoTextContainer}>
              <Image
                source={require("./Imagenes/carrito.png")}
                style={styles.iconInText4}
              />
              <Text style={styles.text4}>Envio a domicilio</Text>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            source={require("./Imagenes/product.png")}
            style={styles.cardImage}
          />
          <View style={styles.promotionLabel}>
            <Text style={styles.promotionLabelText}>PROMOCION</Text>
          </View>
          <View style={styles.heartContainer}>
            <Image
              source={require("./Imagenes/corazon.png")}
              style={styles.hearIcon}
            />
          </View>
          <Pressable onPress={() => setModalVisible(true)}>
          </Pressable>
          <View style={styles.additionalInfoContainer}>
            <View style={styles.additionalInfoTextContainer}>
              <Text style={styles.additionalInfoText}>
                Planta inteligente WIFI NHB-C110
              </Text>
            </View>
            <View style={styles.additionalInfoTextContainer}>
              <Text style={[styles.additionalInfoText, styles.extra]}>
                $349
              </Text>
            </View>
            <View style={styles.additionalInfoTextContainer}>
              <Text style={styles.additionalInfoText}>$209</Text>
            </View>
            <View style={styles.additionalInfoTextContainer}>
              <Image
                source={require("./Imagenes/carrito.png")} 
                style={styles.iconInText4}
              />
              <Text style={styles.text4}>Envio a domicilio</Text>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            source={require("./Imagenes/product.png")}
            style={styles.cardImage}
          />
          <View style={styles.promotionLabel}>
            <Text style={styles.promotionLabelText}>PROMOCION</Text>
          </View>
          <View style={styles.heartContainer}>
            <Image
              source={require("./Imagenes/corazon.png")}
              style={styles.hearIcon}
            />
          </View>
          <Pressable onPress={() => setModalVisible(true)}>
          </Pressable>
          <View style={styles.additionalInfoContainer}>
            <View style={styles.additionalInfoTextContainer}>
              <Text style={styles.additionalInfoText}>
                Planta inteligente WIFI NHB-C110
              </Text>
            </View>
            <View style={styles.additionalInfoTextContainer}>
              <Text style={[styles.additionalInfoText, styles.extra]}>$349</Text>
            </View>
            <View style={styles.additionalInfoTextContainer}>
              <Text style={styles.additionalInfoText}>$209</Text>
            </View>
            <View style={styles.additionalInfoTextContainer}>
              <Image
                source={require("./Imagenes/carrito.png")}
                style={styles.iconInText4}
              />
              <Text style={styles.text4}>Envio a domicilio</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Pressable onPress={() => console.log("Inicio presionado")}>
          <Image
            source={require("./Imagenes/casita.png")}
            style={styles.footerIcon}
          />
        </Pressable>
        <Pressable onPress={() => console.log("Departamento presionado")}>
          <Image
            source={require("./Imagenes/tiendita.png")}
            style={styles.footerIcon}
          />
        </Pressable>
        <Pressable onPress={() => console.log("Ajustes presionados")}>
          <Image
            source={require("./Imagenes/ajustes.png")}
            style={styles.footerIcon}
          />
        </Pressable>
        <Pressable onPress={() => console.log("Favoritos presionados")}>
          <Image
            source={require("./Imagenes/corazon.png")}
            style={styles.footerIcon}
          />
        </Pressable>
        <Pressable onPress={() => console.log("Mi cuenta presionada")}>
          <Image
            source={require("./Imagenes/user.png")}
            style={styles.footerIcon}
          />
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  extra: {
    textDecorationLine: "line-through",
    color: '#80809090',
  },
  additionalInfoContainer: {
    position: "absolute",
    top: 0, 
    right: 0, 
    bottom: 0, 
    justifyContent: "center", 
    alignItems: "center", 
    paddingRight: 5 
  },
  additionalInfoText: {
    color: "black",
    fontSize: 10, 
    marginVertical: 2, 
    textAlign: "justify" 
  },
  additionalInfoTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 160,
    height: 30
  },
  iconInText4: {
    width: 16, 
    height: 16, 
    marginRight: 5, 
    tintColor: "green" 
  },
  text3: {
    color: "black", 
    fontSize: 12, 
    textDecorationLine: "line-through"
  },
  text4: {
    color: "green", 
    fontSize: 12 
  },
  heartContainer: {
    position: "absolute",
    left: 75 
  },
  hearIcon: {
    width: 40, 
    height: 40, 
    borderRadius: 10,
    marginRight: 10
  },
  cardImage: {
    width: 80, 
    height: 80, 
    borderRadius: 10,
    marginRight: 10
  },
  promotionLabel: {
    position: "absolute",
    top: 12, 
    left: 15, 
    backgroundColor: "red",
    padding: 5,
    borderRadius: 5
  },
  promotionLabelText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 4 
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  modalText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white"
  },
  closeModalText: {
    fontSize: 18,
    color: "white",
    marginTop: 20
  },
  contentContainer: {
    flex: 1,
    width: "80%", 
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50
  },
  card: {
    width: "100%", 
    padding: 20,
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 10
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  container: {
    flex: 1,
    backgroundColor: "#FF7F00",
    justifyContent: "center",
    alignItems: "center"
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    position: "absolute",
    bottom: 0
  },
  footerIcon: {
    width: 30,
    height: 30
  },
  footerButton: {
    color: "black"
  },
  texto: {
    fontSize: 34,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20
  },
  imageContainer: {
    backgroundColor: "white",
    borderRadius: 100,
    padding: 10
  },
  logo: {
    width: 160,
    height: 160
  },
  formContainer: {
    marginTop: 20,
    width: "80%"
  },
  input: {
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 10,
    padding: 10
  },
  button: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    alignItems: "center"
  },
  buttonText: {
    color: "black"
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 10,
    paddingTop: 30,
    backgroundColor: "gray",
    position: "absolute",
    top: 0
  },
  backIcon: {
    width: 30,
    height: 30,
    marginRight: 5
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 5,
    flex: 1,
    marginRight: 10
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 5
  },
  searchInput: {
    flex: 1,
    paddingVertical: 0,
    fontSize: 16,
    color: "#2F2E2E"
  },
  cartIcon: {
    width: 30,
    height: 30
  }
});