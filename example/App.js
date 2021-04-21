import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Platform,
  Image
} from "react-native";
import {
  MaterialDialog,
  MultiPickerMaterialDialog,
  SinglePickerMaterialDialog
} from "react-native-material-dialog";
import { getStatusBarHeight } from "react-native-status-bar-height";

import { material } from "react-native-typography";

const map = require("./map.jpg");

export default class App extends Component {
  state = {
    basicNoActionsVisible: false,
    basicNoTitleVisible: false,
    basicOkCancelVisible: false,
    basicCustomLabelsVisible: false,
    basicCustomColorsVisible: false,
    basicScrolledListVisible: false,
    basicMapVisible: false,
    multiPickerVisible: false,
    multiPickerSelectedItems: [],
    scrolledMultiPickerVisible: false,
    scrolledMultiPickerSelectedItems: [],
    singlePickerVisible: false,
    singlePickerSelectedItem: undefined,
    scrolledSinglePickerVisible: false,
    scrolledSinglePickerSelectedItem: undefined
  };

  // TODO Add examples with more complex views

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#303f9f" />
        <View style={styles.navigationBar}>
          <Text style={material.titleWhite}>react-native-material-dialog</Text>
        </View>
        <ScrollView>
          <View style={styles.contentContainer}>
            <View style={styles.sectionContainer}>
              <Text style={material.title}>MaterialDialog</Text>

              <TouchableOpacity
                onPress={() => this.setState({ basicNoActionsVisible: true })}
              >
                <View style={styles.button}>
                  <Text style={material.button}>TITLE & NO ACTIONS</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.setState({ basicNoTitleVisible: true })}
              >
                <View style={styles.button}>
                  <Text style={material.button}>NO TITLE & OK/CANCEL</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.setState({ basicOkCancelVisible: true })}
              >
                <View style={styles.button}>
                  <Text style={material.button}>TITLE & OK/CANCEL</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  this.setState({ basicCustomLabelsVisible: true })
                }
              >
                <View style={styles.button}>
                  <Text style={material.button}>NO TITLE & CUSTOM LABELS</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  this.setState({ basicCustomColorsVisible: true })
                }
              >
                <View style={styles.button}>
                  <Text style={material.button}>CUSTOM COLORS</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  this.setState({ basicScrolledListVisible: true })
                }
              >
                <View style={styles.button}>
                  <Text style={material.button}>
                    SCROLLED WITH A CUSTOM LIST
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.setState({ basicMapVisible: true })}
              >
                <View style={styles.button}>
                  <Text style={material.button}>CUSTOM CONTENT</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.sectionContainer}>
              <Text style={material.title}>MultiPickerMaterialDialog</Text>

              <TouchableOpacity
                onPress={() => this.setState({ multiPickerVisible: true })}
              >
                <View style={styles.button}>
                  <Text style={material.button}>MULTI PICKER</Text>
                </View>
              </TouchableOpacity>
              <Text numberOfLines={1} style={material.caption}>
                {this.state.multiPickerSelectedItems.length === 0
                  ? "No items selected."
                  : `Selected: ${this.state.multiPickerSelectedItems
                      .map(item => item.label)
                      .join(", ")}`}
              </Text>

              <TouchableOpacity
                onPress={() =>
                  this.setState({ scrolledMultiPickerVisible: true })
                }
              >
                <View style={styles.button}>
                  <Text style={material.button}>SCROLLED MULTI PICKER</Text>
                </View>
              </TouchableOpacity>
              <Text numberOfLines={1} style={material.caption}>
                {this.state.scrolledMultiPickerSelectedItems.length === 0
                  ? "No items selected."
                  : `Selected: ${this.state.scrolledMultiPickerSelectedItems
                      .map(item => item.label)
                      .join(", ")}`}
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={material.title}>SinglePickerMaterialDialog</Text>

              <TouchableOpacity
                onPress={() => this.setState({ singlePickerVisible: true })}
              >
                <View style={styles.button}>
                  <Text style={material.button}>SINGLE PICKER</Text>
                </View>
              </TouchableOpacity>
              <Text numberOfLines={1} style={material.caption}>
                {this.state.singlePickerSelectedItem === undefined
                  ? "No item selected."
                  : `Selected: ${this.state.singlePickerSelectedItem.label}`}
              </Text>

              <TouchableOpacity
                onPress={() =>
                  this.setState({ scrolledSinglePickerVisible: true })
                }
              >
                <View style={styles.button}>
                  <Text style={material.button}>SCROLLED SINGLE PICKER</Text>
                </View>
              </TouchableOpacity>
              <Text numberOfLines={1} style={material.caption}>
                {this.state.scrolledSinglePickerSelectedItem === undefined
                  ? "No item selected."
                  : `Selected: ${this.state.scrolledSinglePickerSelectedItem.label}`}
              </Text>
            </View>
          </View>
        </ScrollView>

        <MaterialDialog
          title={"Information"}
          visible={this.state.basicNoActionsVisible}
          onCancel={() => {
            this.setState({ basicNoActionsVisible: false });
          }}
        >
          <Text style={material.subheading}>
            You logged out of the application.
          </Text>
        </MaterialDialog>

        <MaterialDialog
          visible={this.state.basicNoTitleVisible}
          onOk={() => {
            this.setState({ basicNoTitleVisible: false });
          }}
          onCancel={() => {
            this.setState({ basicNoTitleVisible: false });
          }}
        >
          <Text style={material.subheading}>Set alarm?</Text>
        </MaterialDialog>

        <MaterialDialog
          title={"Use Google's Location Service?"}
          visible={this.state.basicOkCancelVisible}
          onOk={() => {
            this.setState({ basicOkCancelVisible: false });
          }}
          onCancel={() => {
            this.setState({ basicOkCancelVisible: false });
          }}
        >
          <Text style={material.subheading}>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </Text>
        </MaterialDialog>

        <MaterialDialog
          visible={this.state.basicCustomLabelsVisible}
          okLabel="KEEP"
          onOk={() => {
            this.setState({ basicCustomLabelsVisible: false });
          }}
          cancelLabel="DISCARD"
          onCancel={() => {
            this.setState({ basicCustomLabelsVisible: false });
          }}
        >
          <Text style={material.subheading}>Discard draft?</Text>
        </MaterialDialog>

        <MaterialDialog
          visible={this.state.basicCustomColorsVisible}
          title={"Save the conversation?"}
          titleColor="#F0F0F0"
          colorAccent="#6ABED0"
          backgroundColor="#181712"
          okLabel="SAVE"
          onOk={() => {
            this.setState({ basicCustomColorsVisible: false });
          }}
          cancelLabel="DISCARD"
          onCancel={() => {
            this.setState({ basicCustomColorsVisible: false });
          }}
        >
          <Text style={[material.subheading, { color: "#B0ABA0" }]}>
            Store the conversation log in Google Drive.
          </Text>
        </MaterialDialog>

        <MaterialDialog
          visible={this.state.basicScrolledListVisible}
          title={"Scrollable list"}
          scrolled
          onOk={() => {
            this.setState({ basicScrolledListVisible: false });
          }}
          onCancel={() => {
            this.setState({ basicScrolledListVisible: false });
          }}
        >
          <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            {LONG_LIST.map(row => (
              <TouchableOpacity key={row}>
                <View style={styles.row}>
                  <Text style={material.subheading}>{row}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </MaterialDialog>

        <MaterialDialog
          visible={this.state.basicMapVisible}
          addPadding={false}
          title={"Location list"}
          onOk={() => {
            this.setState({ basicMapVisible: false });
          }}
          onCancel={() => {
            this.setState({ basicMapVisible: false });
          }}
        >
          <Image style={styles.mapView} source={map} />
        </MaterialDialog>

        <MultiPickerMaterialDialog
          title={"Pick some elements!"}
          items={SHORT_LIST.map((row, index) => ({ value: index, label: row }))}
          visible={this.state.multiPickerVisible}
          selectedItems={this.state.multiPickerSelectedItems}
          onCancel={() => this.setState({ multiPickerVisible: false })}
          onOk={result => {
            this.setState({ multiPickerVisible: false });
            this.setState({ multiPickerSelectedItems: result.selectedItems });
          }}
        />

        <MultiPickerMaterialDialog
          title={"Pick some more elements!"}
          scrolled
          items={LONG_LIST.map((row, index) => ({ value: index, label: row }))}
          visible={this.state.scrolledMultiPickerVisible}
          selectedItems={this.state.scrolledMultiPickerSelectedItems}
          onCancel={() => this.setState({ scrolledMultiPickerVisible: false })}
          onOk={result => {
            this.setState({ scrolledMultiPickerVisible: false });
            this.setState({
              scrolledMultiPickerSelectedItems: result.selectedItems
            });
          }}
        />

        <SinglePickerMaterialDialog
          title={"Pick one element!"}
          items={SHORT_LIST.map((row, index) => ({ value: index, label: row }))}
          visible={this.state.singlePickerVisible}
          selectedItem={this.state.singlePickerSelectedItem}
          onCancel={() => this.setState({ singlePickerVisible: false })}
          onOk={result => {
            this.setState({ singlePickerVisible: false });
            this.setState({ singlePickerSelectedItem: result.selectedItem });
          }}
        />

        <SinglePickerMaterialDialog
          title={"Pick one element!"}
          scrolled
          items={LONG_LIST.map((row, index) => ({ value: index, label: row }))}
          visible={this.state.scrolledSinglePickerVisible}
          selectedItem={this.state.scrolledSinglePickerSelectedItem}
          onCancel={() => this.setState({ scrolledSinglePickerVisible: false })}
          onOk={result => {
            this.setState({ scrolledSinglePickerVisible: false });
            this.setState({
              scrolledSinglePickerSelectedItem: result.selectedItem
            });
          }}
        />
      </View>
    );
  }
}

const LONG_LIST = [
  "List element 1",
  "List element 2",
  "List element 3",
  "List element 4",
  "List element 5",
  "List element 6",
  "List element 7",
  "List element 8",
  "List element 9",
  "List element 10",
  "List element 12",
  "List element 13",
  "List element 14",
  "List element 15",
  "List element 16",
  "List element 17",
  "List element 18",
  "List element 19"
];

const SHORT_LIST = ["List element 1", "List element 2", "List element 3"];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  contentContainer: {
    flex: 1,
    paddingTop: getStatusBarHeight() + 56,
    justifyContent: "flex-start",
    alignItems: "stretch",
    padding: 20
  },
  sectionContainer: {
    paddingVertical: 16
  },
  navigationBar: {
    paddingTop: getStatusBarHeight() + 12,
    paddingBottom: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: "#3F51B5",
    ...Platform.select({
      android: {
        elevation: 4
      },
      ios: {
        zIndex: 10
      }
    })
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    minWidth: 88,
    height: 36,
    borderRadius: 2,
    backgroundColor: "#E8EAF6",
    elevation: 2,
    paddingHorizontal: 16,
    marginTop: 16
  },
  scrollViewContainer: {
    paddingTop: 8
  },
  row: {
    height: 48,
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  mapView: {
    height: 200,
    width: 280
  }
});
