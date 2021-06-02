import React from 'react';
import { Text, View, TextInput, Image, PanResponder, TouchableWithoutFeedback, ImageBackground, Animated } from 'react-native';


import styles from './styles';
import Ripple from 'react-native-material-ripple';
import IconButton from '../IconButton';
import { icons, reactions, sampleImages } from '../../assets/images';
import vh from '../../utils/units/vh';
import TextCircularBook from '../TextCircularBook';
import theme from '../../utils/units/theme';
import Button from '../Button';
import TextCircularMedium from '../TextCircularMedium';
import TextCircularBold from '../TextCircularBold';

import TouchableHOC from '../TouchableHOC';
import MainInput from '../MainInput';
import vw from '../../utils/units/vw';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';
class PostCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      images: [1, 2, 3, 4, 5],
      showSeeMore: false,
      lengthMore: false
    };
    // Slow down speed animation here (1 = default)
    this.timeDilation = 1;
    // If duration touch longer than it, mean long touch
    this.durationLongPress = 250;

    // Variables to check
    // 0 = nothing, 1 = like, 2 = love, 3 = haha, 4 = wow, 5 = sad, 6 = angry
    this.isTouchBtn = false;

    this.isLongTouch = false;
    this.isLiked = false;
    this.whichIconUserChoose = 0;
    this.currentIconFocus = 0;
    this.previousIconFocus = 0;
    this.isDragging = false;
    this.isDraggingOutside = false;
    this.isJustDragInside = true;

    // Duration animation
    this.durationAnimationBox = 500;
    this.durationAnimationQuickTouch = 500;
    this.durationAnimationLongTouch = 150;
    this.durationAnimationIconWhenDrag = 150;
    this.durationAnimationIconWhenRelease = 1000;

    // ------------------------------------------------------------------------------
    // Animation button when quick touch button
    this.tiltIconAnim = new Animated.Value(0);
    this.zoomIconAnim = new Animated.Value(0);
    this.zoomTextAnim = new Animated.Value(0);

    // ------------------------------------------------------------------------------
    // Animation when button long touch button
    this.tiltIconAnim2 = new Animated.Value(0);
    this.zoomIconAnim2 = new Animated.Value(0);
    this.zoomTextAnim2 = new Animated.Value(0);
    // Animation of the box
    this.fadeBoxAnim = new Animated.Value(0);

    // Animation for emoticons
    this.moveRightGroupIcon = new Animated.Value(10);
    // Like
    this.pushIconLikeUp = new Animated.Value(0);
    // I don't know why, but when I set to 0.0, it seem blink,
    // so temp solution is set to 0.01
    this.zoomIconLike = new Animated.Value(0.01);
    // Love
    this.pushIconLoveUp = new Animated.Value(0);
    this.zoomIconLove = new Animated.Value(0.01);
    // Haha
    this.pushIconHahaUp = new Animated.Value(0);
    this.zoomIconHaha = new Animated.Value(0.01);
    // Wow
    this.pushIconWowUp = new Animated.Value(0);
    this.zoomIconWow = new Animated.Value(0.01);
    // Sad
    this.pushIconSadUp = new Animated.Value(0);
    this.zoomIconSad = new Animated.Value(0.01);
    // Angry
    this.pushIconAngryUp = new Animated.Value(0);
    this.zoomIconAngry = new Animated.Value(0.01);

    // ------------------------------------------------------------------------------
    // Animation for zoom emoticons when drag
    this.zoomIconChosen = new Animated.Value(1);
    this.zoomIconNotChosen = new Animated.Value(1);
    this.zoomIconWhenDragOutside = new Animated.Value(1);
    this.zoomIconWhenDragInside = new Animated.Value(1);
    this.zoomBoxWhenDragInside = new Animated.Value(1);
    this.zoomBoxWhenDragOutside = new Animated.Value(0.95);

    // Animation for text description at top icon
    this.pushTextDescriptionUp = new Animated.Value(60);
    this.zoomTextDescription = new Animated.Value(1);

    // ------------------------------------------------------------------------------
    // Animation for jump emoticon when release finger
    this.zoomIconWhenRelease = new Animated.Value(1);
    this.moveUpDownIconWhenRelease = new Animated.Value(0);
    this.moveLeftIconLikeWhenRelease = new Animated.Value(20);
    this.moveLeftIconLoveWhenRelease = new Animated.Value(72);
    this.moveLeftIconHahaWhenRelease = new Animated.Value(124);
    this.moveLeftIconWowWhenRelease = new Animated.Value(173);
    this.moveLeftIconSadWhenRelease = new Animated.Value(226);
    this.moveLeftIconAngryWhenRelease = new Animated.Value(278);
  }
  componentWillMount() {
    // BackHandler.addEventListener('hardwareBackPress', this.backPress);

    this.setupPanResponder();
  }

  componentWillUnmount() {
    // BackHandler.removeEventListener('hardwareBackPress', this.backPress);

  }


  // Handle the drag gesture
  setupPanResponder() {
    this.rootPanResponder = PanResponder.create({
      // prevent if user's dragging without long touch the button
      onMoveShouldSetPanResponder: (evt, gestureState) =>
        !this.isTouchBtn && this.isLongTouch,


      onPanResponderGrant: (evt, gestureState) => {
        console.log('grant', evt);
        this.handleEmoticonWhenDragging(evt, gestureState);
      },

      onPanResponderMove: (evt, gestureState) => {
        console.log('move', evt);

        this.handleEmoticonWhenDragging(evt, gestureState);
      },

      onPanResponderRelease: (evt, gestureState) => {
        this.isDragging = false;
        this.isDraggingOutside = false;
        this.isJustDragInside = true;
        this.previousIconFocus = 0;
        this.currentIconFocus = 0;
        this.setState({});

        this.onDragRelease();
      },
      onStartShouldSetPanResponder: (e, gestureState) => {
        console.log("tsets", gestureState);
        return true;
      },
      onPanResponderEnd: (e, gestureState) => {
        console.log("tsets", gestureState);

        return true;
      }
    });
  }
  handleEmoticonWhenDragging = (evt, gestureState) => {
    // the margin top the box is 100
    // and plus the height of toolbar and the status bar
    // so the range we check is about 150 -> 450
    if (
      gestureState.y0 + gestureState.dy >= 150 &&
      gestureState.y0 + gestureState.dy <= 450
    ) {
      this.isDragging = true;
      this.isDraggingOutside = false;

      if (this.isJustDragInside) {
        this.controlIconWhenDragInside();
      }

      if (
        gestureState.x0 + gestureState.dx >= 35 &&
        gestureState.x0 + gestureState.dx < 88.33
      ) {
        if (this.currentIconFocus !== 1) {
          this.handleWhenDragBetweenIcon(1);
        }
      } else if (
        gestureState.x0 + gestureState.dx >= 88.33 &&
        gestureState.x0 + gestureState.dx < 141.66
      ) {
        if (this.currentIconFocus !== 2) {
          this.handleWhenDragBetweenIcon(2);
        }
      } else if (
        gestureState.x0 + gestureState.dx >= 141.66 &&
        gestureState.x0 + gestureState.dx < 194.99
      ) {
        if (this.currentIconFocus !== 3) {
          this.handleWhenDragBetweenIcon(3);
        }
      } else if (
        gestureState.x0 + gestureState.dx >= 194.99 &&
        gestureState.x0 + gestureState.dx < 248.32
      ) {
        if (this.currentIconFocus !== 4) {
          this.handleWhenDragBetweenIcon(4);
        }
      } else if (
        gestureState.x0 + gestureState.dx >= 248.32 &&
        gestureState.x0 + gestureState.dx < 301.65
      ) {
        if (this.currentIconFocus !== 5) {
          this.handleWhenDragBetweenIcon(5);
        }
      } else if (
        gestureState.x0 + gestureState.dx >= 301.65 &&
        gestureState.x0 + gestureState.dx <= 354.98
      ) {
        if (this.currentIconFocus !== 6) {
          this.handleWhenDragBetweenIcon(6);
        }
      }
    } else {
      this.whichIconUserChoose = 0;
      this.previousIconFocus = 0;
      this.currentIconFocus = 0;
      this.isJustDragInside = true;

      if (this.isDragging && !this.isDraggingOutside) {
        this.isDragging = false;
        this.isDraggingOutside = true;
        this.setState({});

        this.controlBoxWhenDragOutside();
        this.controlIconWhenDragOutside();
      }
    }
  };
  // Handle the touch of button
  onTouchStart = () => {
    this.isTouchBtn = true;
    this.setState({});

    this.timerMeasureLongTouch = setTimeout(
      this.doAnimationLongTouch,
      this.durationLongPress,
    );
  };

  onTouchEnd = () => {
    this.isTouchBtn = false;
    this.setState({});

    if (!this.isLongTouch) {
      if (this.whichIconUserChoose !== 0) {
        this.whichIconUserChoose = 0;

        // assuming that another emoticon is the same like, so we can animate the reverse then
        this.isLiked = true;
      }
      clearTimeout(this.timerMeasureLongTouch);
      this.doAnimationQuickTouch();
    }
  };
  onDragRelease = () => {
    // To lower the emoticons
    this.doAnimationLongTouchReverse();

    // To jump particular emoticon be chosen
    this.controlIconWhenRelease();
  };

  // ------------------------------------------------------------------------------
  // Animation button when quick touch button
  doAnimationQuickTouch = () => {
    if (!this.isLiked) {
      // this.soundShortTouchLike.play();

      this.isLiked = true;
      this.setState({});

      this.tiltIconAnim.setValue(0);
      this.zoomIconAnim.setValue(0);
      this.zoomTextAnim.setValue(0);
      Animated.parallel([
        Animated.timing(this.tiltIconAnim, {
          toValue: 1,
          duration: this.durationAnimationQuickTouch * this.timeDilation,
          useNativeDriver: false
        }),
        Animated.timing(this.zoomIconAnim, {
          toValue: 1,
          duration: this.durationAnimationQuickTouch * this.timeDilation,
          useNativeDriver: false
        }),
        Animated.timing(this.zoomTextAnim, {
          toValue: 1,
          duration: this.durationAnimationQuickTouch * this.timeDilation,
          useNativeDriver: false
        }),
      ]).start();
    } else {
      this.isLiked = false;
      this.setState({});

      this.tiltIconAnim.setValue(1);
      this.zoomIconAnim.setValue(1);
      this.zoomTextAnim.setValue(1);
      Animated.parallel([
        Animated.timing(this.tiltIconAnim, {
          toValue: 0,
          duration: this.durationAnimationQuickTouch * this.timeDilation,
          useNativeDriver: false
        }),
        Animated.timing(this.zoomIconAnim, {
          toValue: 0,
          duration: this.durationAnimationQuickTouch * this.timeDilation,
          useNativeDriver: false
        }),
        Animated.timing(this.zoomTextAnim, {
          toValue: 0,
          duration: this.durationAnimationQuickTouch * this.timeDilation,
          useNativeDriver: false
        }),
      ]).start();
    }
  };
  // ------------------------------------------------------------------------------
  // Animation when long touch button
  doAnimationLongTouch = () => {
    // this.soundBoxUp.play();

    this.isLongTouch = true;
    this.setState({});

    this.tiltIconAnim2.setValue(0);
    this.zoomIconAnim2.setValue(1);
    this.zoomTextAnim2.setValue(1);

    this.fadeBoxAnim.setValue(0);

    this.moveRightGroupIcon.setValue(10);

    this.pushIconLikeUp.setValue(0);
    this.zoomIconLike.setValue(0.01);

    this.pushIconLoveUp.setValue(0);
    this.zoomIconLove.setValue(0.01);

    this.pushIconHahaUp.setValue(0);
    this.zoomIconHaha.setValue(0.01);

    this.pushIconWowUp.setValue(0);
    this.zoomIconWow.setValue(0.01);

    this.pushIconSadUp.setValue(0);
    this.zoomIconSad.setValue(0.01);

    this.pushIconAngryUp.setValue(0);
    this.zoomIconAngry.setValue(0.01);

    Animated.parallel([
      // Button
      Animated.timing(this.tiltIconAnim2, {
        toValue: 1,
        duration: this.durationAnimationLongTouch * this.timeDilation,
        useNativeDriver: false
      }),
      Animated.timing(this.zoomIconAnim2, {
        toValue: 0.8,
        duration: this.durationAnimationLongTouch * this.timeDilation,
        useNativeDriver: false
      }),
      Animated.timing(this.zoomTextAnim2, {
        toValue: 0.8,
        duration: this.durationAnimationLongTouch * this.timeDilation,
        useNativeDriver: false
      }),

      // Box
      Animated.timing(this.fadeBoxAnim, {
        toValue: 1,
        duration: this.durationAnimationBox * this.timeDilation,
        delay: 350,
        useNativeDriver: false
      }),

      // Group emoticon
      Animated.timing(this.moveRightGroupIcon, {
        toValue: 20,
        duration: this.durationAnimationBox * this.timeDilation,
        useNativeDriver: false
      }),

      Animated.timing(this.pushIconLikeUp, {
        toValue: 25,
        duration: 250 * this.timeDilation,
        useNativeDriver: false
      }),
      Animated.timing(this.zoomIconLike, {
        toValue: 1,
        duration: 250 * this.timeDilation,
        useNativeDriver: false
      }),

      Animated.timing(this.pushIconLoveUp, {
        toValue: 25,
        duration: 250 * this.timeDilation,
        delay: 50,
        useNativeDriver: false
      }),
      Animated.timing(this.zoomIconLove, {
        toValue: 1,
        duration: 250 * this.timeDilation,
        delay: 50,
        useNativeDriver: false
      }),

      Animated.timing(this.pushIconHahaUp, {
        toValue: 25,
        duration: 250 * this.timeDilation,
        delay: 100,
        useNativeDriver: false
      }),
      Animated.timing(this.zoomIconHaha, {
        toValue: 1,
        duration: 250 * this.timeDilation,
        delay: 100,
        useNativeDriver: false
      }),

      Animated.timing(this.pushIconWowUp, {
        toValue: 25,
        duration: 250 * this.timeDilation,
        delay: 150,
        useNativeDriver: false
      }),
      Animated.timing(this.zoomIconWow, {
        toValue: 1,
        duration: 250 * this.timeDilation,
        delay: 150,
        useNativeDriver: false
      }),

      Animated.timing(this.pushIconSadUp, {
        toValue: 25,
        duration: 250 * this.timeDilation,
        delay: 200,
        useNativeDriver: false
      }),
      Animated.timing(this.zoomIconSad, {
        toValue: 1,
        duration: 250 * this.timeDilation,
        delay: 200,
        useNativeDriver: false
      }),

      Animated.timing(this.pushIconAngryUp, {
        toValue: 25,
        duration: 250 * this.timeDilation,
        delay: 250,
        useNativeDriver: false
      }),
      Animated.timing(this.zoomIconAngry, {
        toValue: 1,
        duration: 250 * this.timeDilation,
        delay: 250,
        useNativeDriver: false
      }),
    ]).start();
  };

  doAnimationLongTouchReverse = () => {
    this.tiltIconAnim2.setValue(1);
    this.zoomIconAnim2.setValue(0.8);
    this.zoomTextAnim2.setValue(0.8);

    this.fadeBoxAnim.setValue(1);

    this.moveRightGroupIcon.setValue(20);

    this.pushIconLikeUp.setValue(25);
    this.zoomIconLike.setValue(1);

    this.pushIconLoveUp.setValue(25);
    this.zoomIconLove.setValue(1);

    this.pushIconHahaUp.setValue(25);
    this.zoomIconHaha.setValue(1);

    this.pushIconWowUp.setValue(25);
    this.zoomIconWow.setValue(1);

    this.pushIconSadUp.setValue(25);
    this.zoomIconSad.setValue(1);

    this.pushIconAngryUp.setValue(25);
    this.zoomIconAngry.setValue(1);

    Animated.parallel([
      // Button
      Animated.timing(this.tiltIconAnim2, {
        toValue: 0,
        duration: this.durationAnimationLongTouch * this.timeDilation,
        useNativeDriver: false
      }),
      Animated.timing(this.zoomIconAnim2, {
        toValue: 1,
        duration: this.durationAnimationLongTouch * this.timeDilation,
        useNativeDriver: false
      }),
      Animated.timing(this.zoomTextAnim2, {
        toValue: 1,
        duration: this.durationAnimationLongTouch * this.timeDilation,
        useNativeDriver: false
      }),

      // Box
      Animated.timing(this.fadeBoxAnim, {
        toValue: 0,
        duration: this.durationAnimationLongTouch * this.timeDilation,
        useNativeDriver: false
      }),

      // Group emoticon
      Animated.timing(this.moveRightGroupIcon, {
        toValue: 10,
        duration: this.durationAnimationBox * this.timeDilation,
        useNativeDriver: false
      }),

      Animated.timing(this.pushIconLikeUp, {
        toValue: 0,
        duration: 250 * this.timeDilation,
        useNativeDriver: false
      }),
      Animated.timing(this.zoomIconLike, {
        toValue: 0.01,
        duration: 250 * this.timeDilation,
        useNativeDriver: false
      }),

      Animated.timing(this.pushIconLoveUp, {
        toValue: 0,
        duration: 250 * this.timeDilation,
        delay: 50,
        useNativeDriver: false
      }),
      Animated.timing(this.zoomIconLove, {
        toValue: 0.01,
        duration: 250 * this.timeDilation,
        delay: 50,
        useNativeDriver: false
      }),

      Animated.timing(this.pushIconHahaUp, {
        toValue: 0,
        duration: 250 * this.timeDilation,
        delay: 100,
        useNativeDriver: false
      }),
      Animated.timing(this.zoomIconHaha, {
        toValue: 0.01,
        duration: 250 * this.timeDilation,
        delay: 100,
        useNativeDriver: false
      }),

      Animated.timing(this.pushIconWowUp, {
        toValue: 0,
        duration: 250 * this.timeDilation,
        delay: 150,
        useNativeDriver: false
      }),
      Animated.timing(this.zoomIconWow, {
        toValue: 0.01,
        duration: 250 * this.timeDilation,
        delay: 150,
        useNativeDriver: false
      }),

      Animated.timing(this.pushIconSadUp, {
        toValue: 0,
        duration: 250 * this.timeDilation,
        delay: 200,
        useNativeDriver: false
      }),
      Animated.timing(this.zoomIconSad, {
        toValue: 0.01,
        duration: 250 * this.timeDilation,
        delay: 200,
        useNativeDriver: false
      }),

      Animated.timing(this.pushIconAngryUp, {
        toValue: 0,
        duration: 250 * this.timeDilation,
        delay: 250,
        useNativeDriver: false
      }),
      Animated.timing(this.zoomIconAngry, {
        toValue: 0.01,
        duration: 250 * this.timeDilation,
        delay: 250,
        useNativeDriver: false
      }),
    ]).start(this.onAnimationLongTouchComplete);
  };
  onAnimationLongTouchComplete = () => {
    this.isLongTouch = false;
    this.setState({});
  };
  // ------------------------------------------------------------------------------
  // Animation for zoom emoticons when drag
  handleWhenDragBetweenIcon = currentIcon => {
    this.whichIconUserChoose = currentIcon;
    this.previousIconFocus = this.currentIconFocus;
    this.currentIconFocus = currentIcon;


    this.controlIconWhenDrag();
  };
  controlIconWhenDrag = () => {
    this.zoomIconChosen.setValue(0.8);
    this.zoomIconNotChosen.setValue(1.8);
    this.zoomBoxWhenDragInside.setValue(1.0);

    this.pushTextDescriptionUp.setValue(60);
    this.zoomTextDescription.setValue(1.0);

    // For update logic at render function
    this.setState({});

    // Need timeout so logic check at render function can update
    setTimeout(
      () =>
        Animated.parallel([
          Animated.timing(this.zoomIconChosen, {
            toValue: 1.8,
            duration: this.durationAnimationIconWhenDrag * this.timeDilation,
            useNativeDriver: false
          }),
          Animated.timing(this.zoomIconNotChosen, {
            toValue: 0.8,
            duration: this.durationAnimationIconWhenDrag * this.timeDilation,
            useNativeDriver: false
          }),
          Animated.timing(this.zoomBoxWhenDragInside, {
            toValue: 0.95,
            duration: this.durationAnimationIconWhenDrag * this.timeDilation,
            useNativeDriver: false
          }),

          Animated.timing(this.pushTextDescriptionUp, {
            toValue: 90,
            duration: this.durationAnimationIconWhenDrag * this.timeDilation,
            useNativeDriver: false
          }),
          Animated.timing(this.zoomTextDescription, {
            toValue: 1.7,
            duration: this.durationAnimationIconWhenDrag * this.timeDilation,
            useNativeDriver: false
          }),
        ]).start(),
      50,
    );
  };
  controlIconWhenDragInside = () => {
    this.setState({});

    this.zoomIconWhenDragInside.setValue(1.0);
    Animated.timing(this.zoomIconWhenDragInside, {
      toValue: 0.8,
      duration: this.durationAnimationIconWhenDrag * this.timeDilation,
    }).start(this.onAnimationIconWhenDragInsideComplete);
  };
  onAnimationIconWhenDragInsideComplete = () => {
    this.isJustDragInside = false;
    this.setState({});
  };

  controlIconWhenDragOutside = () => {
    this.zoomIconWhenDragOutside.setValue(0.8);

    Animated.timing(this.zoomIconWhenDragOutside, {
      toValue: 1.0,
      duration: this.durationAnimationIconWhenDrag * this.timeDilation,
      useNativeDriver: false
    }).start();
  };

  controlBoxWhenDragOutside = () => {
    this.zoomBoxWhenDragOutside.setValue(0.95);

    Animated.timing(this.zoomBoxWhenDragOutside, {
      toValue: 1.0,
      duration: this.durationAnimationIconWhenDrag * this.timeDilation,
      useNativeDriver: false
    }).start();
  };
  // ------------------------------------------------------------------------------
  // Animation for jump emoticon when release finger0.01
  controlIconWhenRelease = () => {
    this.zoomIconWhenRelease.setValue(1);
    this.moveUpDownIconWhenRelease.setValue(0);
    this.moveLeftIconLikeWhenRelease.setValue(20);
    this.moveLeftIconLoveWhenRelease.setValue(72);
    this.moveLeftIconHahaWhenRelease.setValue(154);
    this.moveLeftIconWowWhenRelease.setValue(173);
    this.moveLeftIconSadWhenRelease.setValue(226);
    this.moveLeftIconAngryWhenRelease.setValue(278);

    Animated.parallel([
      Animated.timing(this.zoomIconWhenRelease, {
        toValue: 0,
        duration: this.durationAnimationIconWhenRelease * this.timeDilation,
        useNativeDriver: false
      }),
      Animated.timing(this.moveUpDownIconWhenRelease, {
        toValue: 1,
        duration: this.durationAnimationIconWhenRelease * this.timeDilation,
        useNativeDriver: false
      }),
      Animated.timing(this.moveLeftIconLikeWhenRelease, {
        toValue: 0,
        duration: this.durationAnimationIconWhenRelease * this.timeDilation,
        useNativeDriver: false
      }),
      Animated.timing(this.moveLeftIconLoveWhenRelease, {
        toValue: 0,
        duration: this.durationAnimationIconWhenRelease * this.timeDilation,
        useNativeDriver: false
      }),
      Animated.timing(this.moveLeftIconHahaWhenRelease, {
        toValue: 0,
        duration: this.durationAnimationIconWhenRelease * this.timeDilation,
        useNativeDriver: false
      }),
      Animated.timing(this.moveLeftIconWowWhenRelease, {
        toValue: 0,
        duration: this.durationAnimationIconWhenRelease * this.timeDilation,
        useNativeDriver: false
      }),
      Animated.timing(this.moveLeftIconSadWhenRelease, {
        toValue: 0,
        duration: this.durationAnimationIconWhenRelease * this.timeDilation,
        useNativeDriver: false
      }),
      Animated.timing(this.moveLeftIconAngryWhenRelease, {
        toValue: 0,
        duration: this.durationAnimationIconWhenRelease * this.timeDilation,
        useNativeDriver: false
      }),
    ]).start();

    if (this.whichIconUserChoose === 0) {
      // this.soundBoxDown.play();
    } else {
      // this.soundIconChoose.play();
    }
  };
  onTextLayout = (e) => {
    this.setState({ lengthMore: e.nativeEvent.lines.length >= 3 })
    if (this.state.showSeeMore && e.nativeEvent.lines.length == 3) {
      this.setState({ lengthMore: false })
    }
  }
  toggleNumberOfLines = () => {
    this.setState({ showSeeMore: !this.state.showSeeMore })
  }



  renderGroupIcon() {
    return (
      <Animated.View
        style={[
          styles.viewWrapGroupIcon,
          { marginLeft: this.moveRightGroupIcon },
        ]}>
        {/* Icon like */}
        <View style={styles.viewWrapIcon}>
          {this.currentIconFocus === 1 ? (
            <Animated.View
              style={[
                styles.viewWrapTextDescription,
                {
                  bottom: this.pushTextDescriptionUp,
                  transform: [{ scale: this.zoomTextDescription }],
                },
              ]}>
              <Text style={styles.textDescription}>Like</Text>
            </Animated.View>
          ) : null}
          <Animated.View
            style={{
              marginBottom: this.pushIconLikeUp,
              transform: [
                {
                  scale: this.isDragging
                    ? this.currentIconFocus === 1
                      ? this.zoomIconChosen
                      : this.previousIconFocus === 1
                        ? this.zoomIconNotChosen
                        : this.isJustDragInside
                          ? this.zoomIconWhenDragInside
                          : 0.8
                    : this.isDraggingOutside
                      ? this.zoomIconWhenDragOutside
                      : this.zoomIconLike,
                },
              ],
            }}>
            <FastImage
              style={styles.imgIcon}
              source={reactions.like_gif}
            />
          </Animated.View>
        </View>

        {/* Icon love */}
        <View style={styles.viewWrapIcon}>
          {this.currentIconFocus === 2 ? (
            <Animated.View
              style={[
                styles.viewWrapTextDescription,
                {
                  bottom: this.pushTextDescriptionUp,
                  transform: [{ scale: this.zoomTextDescription }],
                },
              ]}>
              <Text style={styles.textDescription}>Love</Text>
            </Animated.View>
          ) : null}
          <Animated.View
            style={{
              marginBottom: this.pushIconLoveUp,
              transform: [
                {
                  scale: this.isDragging
                    ? this.currentIconFocus === 2
                      ? this.zoomIconChosen
                      : this.previousIconFocus === 2
                        ? this.zoomIconNotChosen
                        : this.isJustDragInside
                          ? this.zoomIconWhenDragInside
                          : 0.8
                    : this.isDraggingOutside
                      ? this.zoomIconWhenDragOutside
                      : this.zoomIconLove,
                },
              ],
            }}>
            <FastImage
              style={styles.imgIcon}
              source={reactions.love_gif}
            />
          </Animated.View>
        </View>

        {/* Icon haha */}
        <View style={styles.viewWrapIcon}>
          {this.currentIconFocus === 3 ? (
            <Animated.View
              style={[
                styles.viewWrapTextDescription,
                {
                  bottom: this.pushTextDescriptionUp,
                  transform: [{ scale: this.zoomTextDescription }],
                },
              ]}>
              <Text style={styles.textDescription}>Haha</Text>
            </Animated.View>
          ) : null}
          <Animated.View
            style={{
              marginBottom: this.pushIconHahaUp,
              transform: [
                {
                  scale: this.isDragging
                    ? this.currentIconFocus === 3
                      ? this.zoomIconChosen
                      : this.previousIconFocus === 3
                        ? this.zoomIconNotChosen
                        : this.isJustDragInside
                          ? this.zoomIconWhenDragInside
                          : 0.8
                    : this.isDraggingOutside
                      ? this.zoomIconWhenDragOutside
                      : this.zoomIconHaha,
                },
              ],
            }}>
            <FastImage
              style={styles.imgIcon}
              source={reactions.haha_gif}
            />
          </Animated.View>
        </View>

        {/* Icon wow */}
        <View style={styles.viewWrapIcon}>
          {this.currentIconFocus === 4 ? (
            <Animated.View
              style={[
                styles.viewWrapTextDescription,
                {
                  bottom: this.pushTextDescriptionUp,
                  transform: [{ scale: this.zoomTextDescription }],
                },
              ]}>
              <Text style={styles.textDescription}>Wow</Text>
            </Animated.View>
          ) : null}
          <Animated.View
            style={{
              marginBottom: this.pushIconWowUp,
              transform: [
                {
                  scale: this.isDragging
                    ? this.currentIconFocus === 4
                      ? this.zoomIconChosen
                      : this.previousIconFocus === 4
                        ? this.zoomIconNotChosen
                        : this.isJustDragInside
                          ? this.zoomIconWhenDragInside
                          : 0.8
                    : this.isDraggingOutside
                      ? this.zoomIconWhenDragOutside
                      : this.zoomIconWow,
                },
              ],
            }}>
            <FastImage
              style={styles.imgIcon}
              source={reactions.wow_gif}
            />
          </Animated.View>
        </View>

        {/* Icon sad */}
        <View style={styles.viewWrapIcon}>
          {this.currentIconFocus === 5 ? (
            <Animated.View
              style={[
                styles.viewWrapTextDescription,
                {
                  bottom: this.pushTextDescriptionUp,
                  transform: [{ scale: this.zoomTextDescription }],
                },
              ]}>
              <Text style={styles.textDescription}>Sad</Text>
            </Animated.View>
          ) : null}
          <Animated.View
            style={{
              marginBottom: this.pushIconSadUp,
              transform: [
                {
                  scale: this.isDragging
                    ? this.currentIconFocus === 5
                      ? this.zoomIconChosen
                      : this.previousIconFocus === 5
                        ? this.zoomIconNotChosen
                        : this.isJustDragInside
                          ? this.zoomIconWhenDragInside
                          : 0.8
                    : this.isDraggingOutside
                      ? this.zoomIconWhenDragOutside
                      : this.zoomIconSad,
                },
              ],
            }}>
            <FastImage
              style={styles.imgIcon}
              source={reactions.sad_gif}
            />
          </Animated.View>
        </View>

        {/* Icon angry */}
        <View style={styles.viewWrapIcon}>
          {this.currentIconFocus === 6 ? (
            <Animated.View
              style={[
                styles.viewWrapTextDescription,
                {
                  bottom: this.pushTextDescriptionUp,
                  transform: [{ scale: this.zoomTextDescription }],
                },
              ]}>
              <Text style={styles.textDescription}>Angry</Text>
            </Animated.View>
          ) : null}
          <Animated.View
            style={{
              marginBottom: this.pushIconAngryUp,
              transform: [
                {
                  scale: this.isDragging
                    ? this.currentIconFocus === 6
                      ? this.zoomIconChosen
                      : this.previousIconFocus === 6
                        ? this.zoomIconNotChosen
                        : this.isJustDragInside
                          ? this.zoomIconWhenDragInside
                          : 0.8
                    : this.isDraggingOutside
                      ? this.zoomIconWhenDragOutside
                      : this.zoomIconAngry,
                },
              ],
            }}>
            <FastImage
              style={styles.imgIcon}
              source={reactions.angry_gif}
            />
          </Animated.View>
        </View>
      </Animated.View>
    );
  }
  renderGroupJumpIcon() {
    let moveUpDownIcon = this.moveUpDownIconWhenRelease.interpolate({
      inputRange: [0, 0.4, 1],
      outputRange: [60, 100, 0],
    });
    console.log("in jump icon");
    return (
      <View style={styles.viewWrapGroupJumpIcon}>
        {/*Icon like*/}
        {this.whichIconUserChoose === 1 && !this.isDragging ? (
          <Animated.View
            style={{
              width: 40,
              height: 40,
              left: this.moveLeftIconLikeWhenRelease,
              bottom: moveUpDownIcon,
              transform: [{ scale: this.zoomIconWhenRelease }],
              position: 'absolute',
            }}>
            <FastImage
              style={styles.imgIcon}
              source={reactions.like_gif}
            />
          </Animated.View>
        ) : null}

        {/*Icon love*/}
        {this.whichIconUserChoose === 2 && !this.isDragging ? (
          <Animated.View
            style={{
              width: 40,
              height: 40,
              left: this.moveLeftIconLoveWhenRelease,
              bottom: moveUpDownIcon,
              transform: [{ scale: this.zoomIconWhenRelease }],
              position: 'absolute',
            }}>
            <FastImage
              style={styles.imgIcon}
              source={reactions.love_gif}
            />
          </Animated.View>
        ) : null}

        {/*Icon haha*/}
        {this.whichIconUserChoose === 3 && !this.isDragging ? (
          <Animated.View
            style={{
              width: 40,
              height: 40,
              left: this.moveLeftIconHahaWhenRelease,
              bottom: moveUpDownIcon,
              transform: [{ scale: this.zoomIconWhenRelease }],
              position: 'absolute',
            }}>
            <FastImage
              style={styles.imgIcon}
              source={reactions.haha_gif}
            />
          </Animated.View>
        ) : null}

        {/*Icon wow*/}
        {this.whichIconUserChoose === 4 && !this.isDragging ? (
          <Animated.View
            style={{
              width: 40,
              height: 40,
              left: this.moveLeftIconWowWhenRelease,
              bottom: moveUpDownIcon,
              transform: [{ scale: this.zoomIconWhenRelease }],
              position: 'absolute',
            }}>
            <FastImage
              style={styles.imgIcon}
              source={reactions.wow_gif}
            />
          </Animated.View>
        ) : null}

        {/*Icon sad*/}
        {this.whichIconUserChoose === 5 && !this.isDragging ? (
          <Animated.View
            style={{
              width: 40,
              height: 40,
              left: this.moveLeftIconSadWhenRelease,
              bottom: moveUpDownIcon,
              transform: [{ scale: this.zoomIconWhenRelease }],
              position: 'absolute',
            }}>
            <FastImage
              style={styles.imgIcon}
              source={reactions.sad_gif}
            />
          </Animated.View>
        ) : null}

        {/*Icon angry*/}
        {this.whichIconUserChoose === 6 && !this.isDragging ? (
          <Animated.View
            style={{
              width: 40,
              height: 40,
              left: this.moveLeftIconAngryWhenRelease,
              bottom: moveUpDownIcon,
              transform: [{ scale: this.zoomIconWhenRelease }],
              position: 'absolute',
            }}>
            <FastImage
              style={styles.imgIcon}
              source={reactions.angry_gif}
            />
          </Animated.View>
        ) : null}
      </View>
    );
  }


  renderButton() {
    let tiltBounceIconAnim = this.tiltIconAnim.interpolate({
      inputRange: [0, 0.2, 0.8, 1],
      outputRange: ['0deg', '20deg', '-15deg', '0deg'],
    });
    let zoomBounceIconAnim = this.zoomIconAnim.interpolate({
      inputRange: [0, 0.2, 0.8, 1],
      outputRange: [1, 0.8, 1.15, 1],
    });
    let zoomBounceTextAnim = this.zoomIconAnim.interpolate({
      inputRange: [0, 0.2, 0.8, 1],
      outputRange: [1, 0.8, 1.15, 1],
    });

    let tiltBounceIconAnim2 = this.tiltIconAnim2.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '20deg'],
    });

    return (
      <TouchableHOC
        style={[styles.row, { borderColor: this.getBorderColorBtn() }]}
        onTouchStart={this.onTouchStart}
        onTouchEnd={this.onTouchEnd}>
        <Animated.Image
          source={this.getIconBtn()}
          style={[
            styles.likeIcon,
            {
              transform: [
                {
                  rotate: this.isLongTouch
                    ? tiltBounceIconAnim2
                    : tiltBounceIconAnim,
                },
                {
                  scale: this.isLongTouch
                    ? this.zoomIconAnim2
                    : zoomBounceIconAnim,
                },
              ],
            },
          ]}
        />
        <Animated.Text
          style={[
            styles.commentCountText,
            { color: this.getColorTextBtn() },
            {
              transform: [
                {
                  scale: this.isLongTouch
                    ? this.zoomTextAnim2
                    : zoomBounceTextAnim,
                },
              ],
            },
          ]}>
          {this.getTextBtn()}
        </Animated.Text>
      </TouchableHOC>
    );
  }

  getBorderColorBtn() {
    if (!this.isLongTouch && this.isLiked) {
      return '#3b5998';
    } else if (!this.isDragging) {
      switch (this.whichIconUserChoose) {
        case 1:
          return '#3b5998';
        case 2:
          return '#ED5167';
        case 3:
        case 4:
        case 5:
          return '#FFD96A';
        case 6:
          return '#F6876B';
        default:
          return 'white';
      }
    } else {
      return 'white';
    }
  }

  getColorTextBtn() {
    if (!this.isLongTouch && this.isLiked) {
      return '#3b5998';
    } else if (!this.isDragging) {
      switch (this.whichIconUserChoose) {
        case 1:
          return '#3b5998';
        case 2:
          return '#ED5167';
        case 3:
        case 4:
        case 5:
          return '#FFD96A';
        case 6:
          return '#F6876B';
        default:
          return 'white';
      }
    } else {
      return 'white';
    }
  }

  getIconBtn() {
    if (!this.isLongTouch && this.isLiked) {
      console.log("in  if");

      return reactions.like_static_fill;
    } else if (!this.isDragging) {
      // console.log("in else if", this.whichIconUserChoose);
      switch (this.whichIconUserChoose) {
        case 1:
          console.log("in else if", this.whichIconUserChoose);
          return reactions.like_static_fill;
        case 2:
          console.log("in else if", this.whichIconUserChoose);

          return reactions.love_static;
        case 3:
          console.log("in else if", this.whichIconUserChoose);

          return reactions.haha_static;
        case 4:
          console.log("in else if", this.whichIconUserChoose);

          return reactions.wow_static;
        case 5:
          console.log("in else if", this.whichIconUserChoose);

          return reactions.sad_static;
        case 6:
          console.log("in else if", this.whichIconUserChoose);

          return reactions.angry_static;
        default:
          console.log("in else if lasr", this.whichIconUserChoose);

          return reactions.like_static;
      }
    } else {
      console.log("in else");

      return reactions.like_static;
    }
  }

  getTextBtn() {
    if (this.isDragging) {
      return 'Like';
    }
    switch (this.whichIconUserChoose) {
      case 1:
        return 'Like';
      case 2:
        return 'Love';
      case 3:
        return 'Haha';
      case 4:
        return 'Wow';
      case 5:
        return 'Sad';
      case 6:
        return 'Angry';
      default:
        return 'Like';
    }
  }

  renderPostCard = () => {
    switch (this.props.cardStyle) {
      case 1:
        return (
          <View style={[styles.postContainer, { paddingBottom: 1.8 * vh }]}>
            <View style={styles.userInfoRow}>
              <View style={styles.row}>
                <TouchableHOC style={styles.imageBorder} onPress={this.props.onPressProfile}>
                  <Image source={sampleImages.userImage} style={styles.userImage} />
                </TouchableHOC>
                <View>
                  <TextCircularMedium style={styles.username}>{this.props.item.name}</TextCircularMedium>
                  {this.props.item.isSponsored ?
                    <View style={styles.row}>
                      <TouchableHOC onPress={this.props.onPressPrivacy}>
                        <Image source={icons.sponsoredIcon} style={styles.postDateIcon} />
                      </TouchableHOC>
                      <TextCircularBook style={styles.postDate}>Sponsored</TextCircularBook>
                    </View> :
                    <View style={styles.row}>
                      <TouchableHOC onPress={this.props.onPressPrivacy}>
                        <Image source={icons.postDateIcon} style={styles.postDateIcon} />
                      </TouchableHOC>
                      <TextCircularBook style={styles.postDate}>{this.props.item.date}</TextCircularBook>
                    </View>
                  }
                </View>
              </View>

            </View>
            {this.props.item.content ? <View style={styles.postTextView}>
              <TextCircularBook
                onTextLayout={(e) => this.onTextLayout(e)}
                numberOfLines={this.state.showSeeMore == true ? undefined : 3}
                style={styles.postText}>
                {this.props.item.content}</TextCircularBook>

              {this.state.lengthMore == true ?
                <TextCircularBook style={styles.seeMoreText}
                  onPress={() => this.toggleNumberOfLines()}
                >{this.state.showSeeMore == true ? 'See Less...' : '...See More'}</TextCircularBook>
                : null}

            </View>
              : null}
            {this.props.item.isSponsored ?
              <>
                <ImageBackground source={sampleImages.sponsoredImage} style={styles.sponsoredImageView}
                  imageStyle={styles.sponsoredImage}
                >
                  <LinearGradient
                    style={styles.gradient}
                    colors={['#FFFFFF10', '#08001090']}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}
                  >
                    <View style={styles.roomsBox}>
                      <TextCircularBold style={styles.roomText}>4, 5 & 6 ROOMS</TextCircularBold>
                      <TextCircularMedium style={styles.planDesc}>Luxury apartments & Duplexes</TextCircularMedium>
                      <View style={styles.planLabelTitle}>
                        <TextCircularMedium style={styles.planLabelText}>36 MONTHS INSTALLMENT PLAN</TextCircularMedium>
                      </View>
                    </View>
                    <View>
                      <TextCircularMedium style={styles.callTitle}>CALL NOW</TextCircularMedium>
                      <TextCircularMedium style={styles.callNumber}>+123-456-789</TextCircularMedium>
                      <TextCircularMedium style={styles.callNumber}>+123-456-789</TextCircularMedium>

                    </View>
                  </LinearGradient>
                </ImageBackground>
                <View style={styles.sposoredContentRow}>
                  <View>
                    <TextCircularMedium style={styles.sponsorTitle}>
                      FORM ON FACEBOOK
                </TextCircularMedium>
                    <TextCircularMedium style={styles.planText}>3 Years Instalment Plan</TextCircularMedium>
                  </View>
                  <Button title="Learn More" style={styles.learnBtn} labelStyle={styles.learnBtnLabel} />
                </View>
              </>
              :
              this.props.item.images ?
                this.props.item.images.length == 1 ?
                  <Image source={this.props.item.images[0]} style={styles.postImage} />
                  : <View style={styles.multipleImagesRow}>
                    {this.props.item.images.map((val, index) => {
                      return (
                        index == 4 ?
                          <ImageBackground source={val}
                            style={[styles.postImage2,
                            {
                              width: index < 2 ? 46 * vw : 30.3 * vw,
                              height: index < 2 ? 18 * vh : 11 * vh,
                            }]}
                            imageStyle={[styles.postImage2,
                            {
                              width: index < 2 ? 46 * vw : 30.3 * vw,
                              height: index < 2 ? 18 * vh : 11 * vh,
                            }]}
                          >
                            <TouchableHOC style={styles.blurView}>
                              <TextCircularBook style={styles.additionalCount}>+3</TextCircularBook>
                            </TouchableHOC>

                          </ImageBackground>
                          :
                          <Image source={val} style={[styles.postImage2,
                          {
                            width: index < 2 ? 46 * vw : 30.3 * vw,
                            height: index < 2 ? 18 * vh : 11 * vh,
                          }]} />
                      )
                    })
                    }
                  </View> : this.props.item.videos ?
                  <ImageBackground source={this.props.item.videos[0]}
                    style={[styles.postImage2,
                    {
                      width: 92 * vw,
                      height: 18 * vh,
                    }]}
                    imageStyle={[styles.postImage2,
                    {
                      width: 92 * vw,
                      height: 18 * vh,
                    }]}>
                    <View style={styles.blurView3}>
                      <TouchableHOC style={styles.playBtn} >
                        <Image source={icons.playBtn} style={styles.playIcon} />
                      </TouchableHOC>
                    </View>
                  </ImageBackground> : null
            }

          </View>
        );
        break;
      default:
        return (
          <View style={[styles.postContainer, this.props.postContainer]}>
            <View style={styles.userInfoRow}>
              <View style={styles.row}>
                <TouchableHOC style={styles.imageBorder} onPress={this.props.onPressProfile}>
                  <Image source={sampleImages.userImage} style={styles.userImage} />
                </TouchableHOC>
                <View>
                  <TextCircularMedium style={styles.username}>{this.props.item.name}</TextCircularMedium>
                  {this.props.item.isSponsored ?
                    <View style={styles.row}>
                      <TouchableHOC onPress={this.props.onPressPrivacy}>
                        <Image source={icons.sponsoredIcon} style={styles.postDateIcon} />
                      </TouchableHOC>
                      <TextCircularBook style={styles.postDate}>Sponsored</TextCircularBook>
                    </View> :
                    <View style={styles.row}>
                      <TouchableHOC onPress={this.props.onPressPrivacy}>
                        <Image source={icons.postDateIcon} style={styles.postDateIcon} />
                      </TouchableHOC>
                      <TextCircularBook style={styles.postDate}>{this.props.item.date}</TextCircularBook>
                    </View>
                  }
                </View>
              </View>
              <TouchableHOC style={styles.optionBtn} onPress={this.props.onOptionPress}>
                <Image source={icons.horizontalDot} style={styles.horizontalDot} />
              </TouchableHOC>
            </View>
            {this.props.item.content ? <View style={styles.postTextView}>
              <TextCircularBook
                onTextLayout={(e) => this.onTextLayout(e)}
                numberOfLines={this.state.showSeeMore == true ? undefined : 3}
                style={styles.postText}>
                {this.props.item.content}</TextCircularBook>

              {this.state.lengthMore == true ?
                <TextCircularBook style={styles.seeMoreText}
                  onPress={() => this.toggleNumberOfLines()}
                >{this.state.showSeeMore == true ? 'See Less...' : '...See More'}</TextCircularBook>
                : null}

            </View>
              : null}
            {this.props.item.isSponsored ?
              <>
                <ImageBackground source={sampleImages.sponsoredImage} style={styles.sponsoredImageView}
                  imageStyle={styles.sponsoredImage}
                >
                  <LinearGradient
                    style={styles.gradient}
                    colors={['#FFFFFF10', '#08001090']}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}
                  >
                    <View style={styles.roomsBox}>
                      <TextCircularBold style={styles.roomText}>4, 5 & 6 ROOMS</TextCircularBold>
                      <TextCircularMedium style={styles.planDesc}>Luxury apartments & Duplexes</TextCircularMedium>
                      <View style={styles.planLabelTitle}>
                        <TextCircularMedium style={styles.planLabelText}>36 MONTHS INSTALLMENT PLAN</TextCircularMedium>
                      </View>
                    </View>
                    <View>
                      <TextCircularMedium style={styles.callTitle}>CALL NOW</TextCircularMedium>
                      <TextCircularMedium style={styles.callNumber}>+123-456-789</TextCircularMedium>
                      <TextCircularMedium style={styles.callNumber}>+123-456-789</TextCircularMedium>

                    </View>
                  </LinearGradient>
                </ImageBackground>
                <View style={styles.sposoredContentRow}>
                  <View>
                    <TextCircularMedium style={styles.sponsorTitle}>
                      FORM ON FACEBOOK
                </TextCircularMedium>
                    <TextCircularMedium style={styles.planText}>3 Years Instalment Plan</TextCircularMedium>
                  </View>
                  <Button title="Learn More" style={styles.learnBtn} labelStyle={styles.learnBtnLabel} />
                </View>
              </>
              :
              this.props.item.images ?
                this.props.item.images.length == 1 ?
                  <Image source={this.props.item.images[0]} style={styles.postImage} />
                  : <View style={styles.multipleImagesRow}>
                    {this.props.item.images.map((val, index) => {
                      return (
                        index == 4 ?
                          <ImageBackground source={val}
                            style={[styles.postImage2,
                            {
                              width: index < 2 ? 46 * vw : 30.3 * vw,
                              height: index < 2 ? 18 * vh : 11 * vh,
                            }]}
                            imageStyle={[styles.postImage2,
                            {
                              width: index < 2 ? 46 * vw : 30.3 * vw,
                              height: index < 2 ? 18 * vh : 11 * vh,
                            }]}
                          >
                            <TouchableHOC style={styles.blurView}>
                              <TextCircularBook style={styles.additionalCount}>+3</TextCircularBook>
                            </TouchableHOC>

                          </ImageBackground>
                          :
                          <Image source={val} style={[styles.postImage2,
                          {
                            width: index < 2 ? 46 * vw : 30.3 * vw,
                            height: index < 2 ? 18 * vh : 11 * vh,
                          }]} />
                      )
                    })
                    }
                  </View> : this.props.item.videos ?
                  <ImageBackground source={this.props.item.videos[0]}
                    style={[styles.postImage2,
                    {
                      width: 92 * vw,
                      height: 18 * vh,
                    }]}
                    imageStyle={[styles.postImage2,
                    {
                      width: 92 * vw,
                      height: 18 * vh,
                    }]}>
                    <TouchableHOC style={styles.blurView}>
                      <TextCircularBook style={styles.additionalCount}>+3</TextCircularBook>
                    </TouchableHOC>
                  </ImageBackground> : null
            }

            <View style={styles.expandedRow}>
              {/* Body */}
              <View style={styles.viewBody} {...this.rootPanResponder.panHandlers}
                pointerEvents="box-none"
              >
                {/* Top space */}
                <View style={styles.viewTopSpace} />

                {/* Content */}
                <View style={styles.viewContent}>
                  <Animated.View
                    style={[
                      styles.viewBox,
                      {
                        opacity: this.fadeBoxAnim,
                        transform: [
                          {
                            scale: this.isDragging
                              ? this.previousIconFocus === 0
                                ? this.zoomBoxWhenDragInside
                                : 0.95
                              : this.isDraggingOutside
                                ? this.zoomBoxWhenDragOutside
                                : 1.0,
                          },
                        ],
                      },
                    ]}
                  />
                  {/* Group emoticon */}
                  {this.renderGroupIcon()}
                  {/*Group emoticon for jump*/}
                  {this.renderGroupJumpIcon()}

                  {/* Button */}
                </View>
              </View>
              <TouchableHOC style={styles.row} onPress={this.props.reactionPress}>
                {this.props.item.isReactionLike ? <Image source={icons.likeBlueIcon} style={styles.likeReactIcon} /> : null}
                {this.props.item.isReactionHeart ? <Image source={icons.heartIcon} style={[styles.likeReactIcon, styles.reactIconLeft]} /> : null}
                {this.props.item.isReactionLaugh ? <Image source={icons.laughIcon} style={[styles.likeReactIcon, styles.reactIconLeft]} /> : null}
                <TextCircularBook style={styles.reactionCount}>{this.props.item.reactionCount}</TextCircularBook>
              </TouchableHOC>
              <View style={styles.row}>
                <TextCircularBook style={styles.commentCountText}>{this.props.item.commentCount} Comments</TextCircularBook>
                <TextCircularBook style={[styles.commentCountText, styles.dotText]}>.</TextCircularBook>
                <TextCircularBook style={styles.commentCountText}>{this.props.item.shareCount} Shares</TextCircularBook>
              </View>
            </View>
            <View style={[styles.expandedRow,
            styles.likeLabelRow]}>
              {/* <TouchableWithoutFeedback>
                <View style={styles.row}>
                  <Image source={icons.likeIcon} style={styles.likeIcon} />
                  <TextCircularBook style={styles.commentCountText}>Like</TextCircularBook>
                </View>
              </TouchableWithoutFeedback> */}
              {this.renderButton()}

              <TouchableWithoutFeedback>
                <View style={styles.row}>
                  <Image source={icons.commentIcon} style={styles.likeIcon} />
                  <TextCircularBook style={styles.commentCountText}>Comment</TextCircularBook>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback>
                <View style={styles.row}>
                  <Image source={icons.shareIcon} style={styles.likeIcon} />
                  <TextCircularBook style={styles.commentCountText}>Share</TextCircularBook>
                </View>
              </TouchableWithoutFeedback>

            </View>

            <View style={[styles.expandedRow, styles.commentRow]}>
              <Image source={sampleImages.userImage} style={styles.userImageComment} />
              <View style={styles.commentTextView}>
                <TextCircularMedium style={[styles.commentText, styles.commentTitle]}>Joe Clark</TextCircularMedium>
                <TextCircularBook numberOfLines={0}
                  style={styles.commentText}>Lorem ipsum dolor sit amet, consectetur are it adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sitom</TextCircularBook>
              </View>
            </View>
            <View style={styles.addCommentRow}>
              <Image source={sampleImages.userImage} style={styles.userImageComment} />
              <MainInput placeholder="Write a comment.."
                style={styles.shareInput}
                rightIcon={icons.sendIcon}
              />
            </View>

          </View>
        );
        break;
    }
  }

  render() {

    return (
      this.renderPostCard()
    )
  }
}
export default PostCard;
