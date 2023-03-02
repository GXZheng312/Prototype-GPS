import {
  StatusBar
} from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ImageBackground,
  Image
} from 'react-native';
import {
  Camera
} from 'expo-camera';

let camera;
let currentPhoto;

export default function App() {
  const [startCamera, setStartCamera] = React.useState(false);
  const [previewVisible, setPreviewVisible] = React.useState(false);
  const [capturedImage, setCapturedImage] = React.useState(null);
  const [cameraType, setCameraType] = React.useState(Camera.Constants.Type.back);
  const [flashMode, setFlashMode] = React.useState('off');

  const __startCamera = async () => {
    const {
      status
    } = await Camera.requestCameraPermissionsAsync();
    
    if (status === 'granted') {
      setStartCamera(true);
    } else {
      Alert.alert('Access denied');
    }
  };

  const __takePicture = async () => {
    const photo = await camera.takePictureAsync();

    setPreviewVisible(true);
    setCapturedImage(photo);

    currentPhoto = photo;
  };

  const __savePhoto = () => {
    __showPhotoOnScreen();
  };

  const __retakePicture = () => {
    setCapturedImage(null);
    setPreviewVisible(false);

    __startCamera();
  };

  const __handleFlashMode = () => {
    if (flashMode === 'on') {
      setFlashMode('off');
    } else if (flashMode === 'off') {
      setFlashMode('on');
    } else {
      setFlashMode('auto');
    }
  };

  const __switchCamera = () => {
    if (cameraType === 'back') {
      setCameraType('front');
    } else {
      setCameraType('back');
    }
  };

  const __showPhotoOnScreen = () => {
    setStartCamera(false);
  };

  if (currentPhoto != null) {
    return (React.createElement(View, {
      style: styles.container
    },
      React.createElement(Image, {
        style: {
          flex: 1,
          width: '80%',
          height: '80%',
          resizeMode: 'contain'
        },
        source: {
          uri: currentPhoto && currentPhoto.uri
        }
      })
    ));
  }

  return (React.createElement(View, {
    style: styles.container
  },
    startCamera ? (React.createElement(View, {
      style: {
        flex: 1,
        width: '100%'
      }
    }, previewVisible && capturedImage ? (React.createElement(CameraPreview, {
      photo: capturedImage,
      savePhoto: __savePhoto,
      retakePicture: __retakePicture
    })) : (React.createElement(Camera, {
      type: cameraType,
      flashMode: flashMode,
      style: {
        flex: 1
      },
      ref: (r) => {
        camera = r;
      }
    },
      React.createElement(View, {
        style: {
          flex: 1,
          width: '100%',
          backgroundColor: 'transparent',
          flexDirection: 'row'
        }
      },
        React.createElement(View, {
          style: {
            position: 'absolute',
            left: '5%',
            top: '10%',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }
        },
          React.createElement(TouchableOpacity, {
            onPress: __handleFlashMode,
            style: {
              backgroundColor: flashMode === 'off' ? '#000' : '#fff',
              borderRadius: 100,
              height: 25,
              width: 25
            }
          },
            React.createElement(Text, {
              style: {
                fontSize: 20
              }
            }, "\u26A1\uFE0F")),
          React.createElement(TouchableOpacity, {
            onPress: __switchCamera,
            style: {
              marginTop: 20,
              borderRadius: 100,
              height: 25,
              width: 25
            }
          },
            React.createElement(Text, {
              style: {
                fontSize: 20
              }
            }, cameraType === 'front' ? '🤳' : '📷'))),
        React.createElement(View, {
          style: {
            position: 'absolute',
            bottom: 0,
            flexDirection: 'row',
            flex: 1,
            width: '100%',
            padding: 20,
            justifyContent: 'space-between'
          }
        },
          React.createElement(View, {
            style: {
              alignSelf: 'center',
              flex: 1,
              alignItems: 'center'
            }
          },
            React.createElement(TouchableOpacity, {
              onPress: __takePicture,
              style: {
                width: 70,
                height: 70,
                bottom: 0,
                borderRadius: 50,
                backgroundColor: '#fff'
              }
            })))))))) : (React.createElement(View, {
              style: {
                flex: 1,
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center'
              }
            },
              React.createElement(TouchableOpacity, {
                onPress: __startCamera,
                style: {
                  width: 130,
                  borderRadius: 4,
                  backgroundColor: '#14274e',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 40
                }
              },
                React.createElement(Text, {
                  style: {
                    color: '#fff',
                    fontWeight: 'bold',
                    textAlign: 'center'
                  }
                }, "Take picture")))),
    React.createElement(StatusBar, {
      style: "auto"
    })));
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const CameraPreview = ({
  photo,
  retakePicture,
  savePhoto
}) => {
  return (React.createElement(View, {
    style: {
      backgroundColor: 'transparent',
      flex: 1,
      width: '100%',
      height: '100%'
    }
  },
    React.createElement(ImageBackground, {
      source: {
        uri: photo && photo.uri
      },
      style: {
        flex: 1
      }
    },
      React.createElement(View, {
        style: {
          flex: 1,
          flexDirection: 'column',
          padding: 15,
          justifyContent: 'flex-end'
        }
      },
        React.createElement(View, {
          style: {
            flexDirection: 'row',
            justifyContent: 'space-between'
          }
        },
          React.createElement(TouchableOpacity, {
            onPress: retakePicture,
            style: {
              width: 130,
              height: 40,
              alignItems: 'center',
              borderRadius: 4
            }
          },
            React.createElement(Text, {
              style: {
                color: '#fff',
                fontSize: 20
              }
            }, "Retake")),
          React.createElement(TouchableOpacity, {
            onPress: savePhoto,
            style: {
              width: 130,
              height: 40,
              alignItems: 'center',
              borderRadius: 4
            }
          },
            React.createElement(Text, {
              style: {
                color: '#fff',
                fontSize: 20
              }
            }, "Save")))))));
};