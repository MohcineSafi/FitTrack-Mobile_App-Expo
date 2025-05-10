import React from 'react';
import { ScrollView, View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { Filter, Plus } from 'lucide-react-native';
import WorkoutCard from '@/components/WorkoutCard';
import { mockWorkouts } from '@/utils/mockData';

interface WorkoutCategoryProps {
  title: string;
  active: boolean;
  onPress: () => void;
}

const WorkoutCategory: React.FC<WorkoutCategoryProps> = ({ title, active, onPress }) => (
  <TouchableOpacity 
    style={[styles.categoryButton, active && styles.activeCategoryButton]} 
    onPress={onPress}
  >
    <Text style={[styles.categoryText, active && styles.activeCategoryText]}>
      {title}
    </Text>
  </TouchableOpacity>
);

export default function WorkoutsScreen() {
  const [activeCategory, setActiveCategory] = React.useState('All');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Workouts</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconButton}>
            <Filter size={20} color="#1F2937" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesContainer}
      >
        {['All', 'Strength', 'Cardio', 'HIIT', 'Yoga', 'Stretching'].map((category) => (
          <WorkoutCategory
            key={category}
            title={category}
            active={activeCategory === category}
            onPress={() => setActiveCategory(category)}
          />
        ))}
      </ScrollView>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Workouts</Text>
          <View style={styles.featuredWorkout}>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/2468339/pexels-photo-2468339.jpeg?auto=compress&cs=tinysrgb&w=800' }}
              style={styles.featuredImage}
            />
            <View style={styles.featuredOverlay} />
            <View style={styles.featuredContent}>
              <View>
                <Text style={styles.featuredTitle}>Summer Body Challenge</Text>
                <Text style={styles.featuredDescription}>
                  4-week program to get in shape for summer
                </Text>
              </View>
              <TouchableOpacity style={styles.startButton}>
                <Text style={styles.startButtonText}>Start</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>All Workouts</Text>
          <View style={styles.workoutsContainer}>
            {mockWorkouts.map((workout) => (
              <WorkoutCard
                key={workout.id}
                title={workout.name}
                duration={workout.duration}
                exercises={workout.exercises}
                image={workout.image}
                onPress={() => console.log(`Workout pressed: ${workout.name}`)}
              />
            ))}
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.floatingButton}>
        <Plus size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
  },
  headerTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 28,
    color: '#1F2937',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    marginRight: 8,
  },
  activeCategoryButton: {
    backgroundColor: '#3B82F6',
  },
  categoryText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#6B7280',
  },
  activeCategoryText: {
    color: '#FFFFFF',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#1F2937',
    marginBottom: 16,
  },
  featuredWorkout: {
    height: 180,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 24,
  },
  featuredImage: {
    width: '100%',
    height: 180,
    position: 'absolute',
  },
  featuredOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  featuredContent: {
    padding: 16,
    flex: 1,
    justifyContent: 'space-between',
  },
  featuredTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 22,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  featuredDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.9,
    width: '80%',
  },
  startButton: {
    backgroundColor: '#3B82F6',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  startButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#FFFFFF',
  },
  workoutsContainer: {
    marginBottom: 24,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#3B82F6',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#3B82F6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
});