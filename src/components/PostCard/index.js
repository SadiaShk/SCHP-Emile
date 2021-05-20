import React from 'react';
import { Text, View, TextInput, Image, TouchableWithoutFeedback, ImageBackground } from 'react-native';


import styles from './styles';
import Ripple from 'react-native-material-ripple';
import IconButton from '../IconButton';
import { icons, sampleImages } from '../../assets/images';
import vh from '../../utils/units/vh';
import TextCircularBook from '../TextCircularBook';
import theme from '../../utils/units/theme';
import TextCircularBold from '../TextCircularBold';
import TextCircularMedium from '../TextCircularMedium';

import TouchableHOC from '../TouchableHOC';
import MainInput from '../MainInput';
import vw from '../../utils/units/vw';

class PostCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      images: [1, 2, 3, 4, 5]
    };
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
                  <TextCircularMedium style={styles.username}>Mark Carson</TextCircularMedium>
                  <View style={styles.row}>
                    <Image source={icons.postDateIcon} style={styles.postDateIcon} />
                    <TextCircularBook style={styles.postDate}>{this.props.item.date}</TextCircularBook>
                  </View>
                </View>
              </View>
              <TouchableHOC style={styles.optionBtn}>
                <Image source={icons.horizontalDot} style={styles.horizontalDot} />
              </TouchableHOC>
            </View>
            {this.props.item.content ? <TextCircularBook numberOfLines={0} style={styles.postText}>
              {this.props.item.content}</TextCircularBook>
              : null}
            <ImageBackground source={sampleImages.sponsoredImage} style={styles.sponsoredImageView}
              imageStyle={styles.sponsoredImage}
            >

            </ImageBackground>
            <View style={styles.sposoredContentRow}>

            </View>

            <View style={styles.expandedRow}>
              <View style={styles.row}>
                {this.props.item.isReactionLike ? <Image source={icons.likeBlueIcon} style={styles.likeReactIcon} /> : null}
                {this.props.item.isReactionHeart ? <Image source={icons.heartIcon} style={[styles.likeReactIcon, styles.reactIconLeft]} /> : null}
                {this.props.item.isReactionLaugh ? <Image source={icons.laughIcon} style={[styles.likeReactIcon, styles.reactIconLeft]} /> : null}
                <TextCircularBook style={styles.reactionCount}>{this.props.item.reactionCount}</TextCircularBook>
              </View>
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
      default:
        return (
          <View style={styles.postContainer}>
            <View style={styles.userInfoRow}>
              <View style={styles.row}>
                <View style={styles.imageBorder}>
                  <Image source={sampleImages.userImage} style={styles.userImage} />
                </View>
                <View>
                  <TextCircularMedium style={styles.username}>Mark Carson</TextCircularMedium>
                  <View style={styles.row}>
                    <Image source={icons.postDateIcon} style={styles.postDateIcon} />
                    <TextCircularBook style={styles.postDate}>{this.props.item.date}</TextCircularBook>
                  </View>
                </View>
              </View>
              <TouchableHOC style={styles.optionBtn}>
                <Image source={icons.horizontalDot} style={styles.horizontalDot} />
              </TouchableHOC>
            </View>
            {this.props.item.content ? <TextCircularBook numberOfLines={0} style={styles.postText}>
              {this.props.item.content}</TextCircularBook>
              : null}
            {
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
                  </View> : null}
            <View style={styles.expandedRow}>
              <View style={styles.row}>
                {this.props.item.isReactionLike ? <Image source={icons.likeBlueIcon} style={styles.likeReactIcon} /> : null}
                {this.props.item.isReactionHeart ? <Image source={icons.heartIcon} style={[styles.likeReactIcon, styles.reactIconLeft]} /> : null}
                {this.props.item.isReactionLaugh ? <Image source={icons.laughIcon} style={[styles.likeReactIcon, styles.reactIconLeft]} /> : null}
                <TextCircularBook style={styles.reactionCount}>{this.props.item.reactionCount}</TextCircularBook>
              </View>
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
