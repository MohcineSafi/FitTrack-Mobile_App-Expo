import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Clock, Dumbbell, ChevronRight } from 'lucide-react-native';

interface WorkoutCardProps {
  title: string;
  duration: string;
  exercises: number;
  image: string;
  onPress?: () => void;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({
  title,
  duration,
  exercises,
  image,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.overlay} />
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.detailsContainer}>
            <View style={styles.detailItem}>
              <Clock size={14} color="#FFF" />
              <Text style={styles.detailText}>{duration}</Text>
            </View>
            <View style={styles.detailItem}>
              <Dumbbell size={14} color="#FFF" />
              <Text style={styles.detailText}>{exercises} exercises</Text>
            </View>
          </View>
        </View>
        <View style={styles.chevronContainer}>
          <ChevronRight size={20} color="#FFF" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 160,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 160,
    position: 'absolute',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  content: {
    padding: 16,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  detailText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#FFFFFF',
    marginLeft: 4,
  },
  chevronContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WorkoutCard;