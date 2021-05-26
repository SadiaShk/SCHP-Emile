import React from 'react';
import { Text, View, TextInput, Image, TouchableWithoutFeedback, ImageBackground } from 'react-native';


import styles from './styles';
import Ripple from 'react-native-material-ripple';
import IconButton from '../IconButton';
import { icons, sampleImages } from '../../assets/images';
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

class PostCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      images: [1, 2, 3, 4, 5],
      showSeeMore: false,
      lengthMore: false
    };
  }
  onTextLayout = (e) => {
    this.setState({ lengthMore: e.nativeEvent.lines.length >= 3 })
    if (this.state.showSeeMore && e.nativeEvent.lines.length == 3) {
      this.setState({ lengthMore: false })
    }
  }
  toggleNumberOfLines = () => {
    this.setState({ showSeeMore: !this.state.showSeeMore })
  }
  renderPostCard = () => {
    switch (this.props.cardStyle) {
      case 1:
        return (
          <View style={styles.postContainer}>
            <View style={styles.userInfoRow}>
              <View style={styles.row}>
                <View style={styles.imageBorder}>
                  <Image source={sampleImages.userImage} style={styles.userImage} />
                </View>
                <View>
                  <TextCircularMedium style={styles.username}>{this.props.item.name}</TextCircularMedium>
                  {this.props.item.isSponsored ?
                    <View style={styles.row}>
                      <Image source={icons.sponsoredIcon} style={styles.postDateIcon} />
                      <TextCircularBook style={styles.postDate}>Sponsored</TextCircularBook>
                    </View> :
                    <View style={styles.row}>
                      <Image source={icons.postDateIcon} style={styles.postDateIcon} />
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
          <View style={styles.postContainer}>
            <View style={styles.userInfoRow}>
              <View style={styles.row}>
                <View style={styles.imageBorder}>
                  <Image source={sampleImages.userImage} style={styles.userImage} />
                </View>
                <View>
                  <TextCircularMedium style={styles.username}>{this.props.item.name}</TextCircularMedium>
                  {this.props.item.isSponsored ?
                    <View style={styles.row}>
                      <Image source={icons.sponsoredIcon} style={styles.postDateIcon} />
                      <TextCircularBook style={styles.postDate}>Sponsored</TextCircularBook>
                    </View> :
                    <View style={styles.row}>
                      <Image source={icons.postDateIcon} style={styles.postDateIcon} />
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
              <TouchableWithoutFeedback>
                <View style={styles.row}>
                  <Image source={icons.likeIcon} style={styles.likeIcon} />
                  <TextCircularBook style={styles.commentCountText}>Like</TextCircularBook>
                </View>
              </TouchableWithoutFeedback>
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
