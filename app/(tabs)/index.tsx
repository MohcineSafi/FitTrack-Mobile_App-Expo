import React from 'react';
import { ScrollView, View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { Bell, Search } from 'lucide-react-native';
import ActivityCard from '@/components/ActivityCard';
import WorkoutCard from '@/components/WorkoutCard';
import { mockActivities, mockWorkouts, userData } from '@/utils/mockData';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <View>
              <Text style={styles.greeting}>Hi, {userData.name.split(' ')[0]}</Text>
              <Text style={styles.subGreeting}>Let's crush your fitness goals today!</Text>
            </View>
            <View style={styles.headerRightContent}>
              <TouchableOpacity style={styles.iconButton}>
                <Bell size={24} color="#1F2937" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.profileImageContainer}>
                <Image
                  source={{ uri: userData.profileImage }}
                  style={styles.profileImage}
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.searchBar}>
            <Search size={20} color="#6B7280" />
            <Text style={styles.searchText}>Search workouts, exercises...</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Daily Activity</Text>
          <View style={styles.activityContainer}>
            {mockActivities.map((activity) => (
              <ActivityCard
                key={activity.id}
                title={activity.title}
                progress={activity.progress}
                metric={activity.metric}
                metricValue={activity.metricValue}
                progressColor={activity.progressColor}
                onPress={() => console.log(`Activity pressed: ${activity.title}`)}
              />
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recommended Workouts</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.workoutsContainer}>
            {mockWorkouts.slice(0, 3).map((workout) => (
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  greeting: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: '#1F2937',
  },
  subGreeting: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  headerRightContent: {
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
    marginRight: 12,
  },
  profileImageContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  profileImage: {
    width: 40,
    height: 40,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  searchText: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#9CA3AF',
    marginLeft: 12,
  },
  section: {
    paddingHorizontal: 16,
    marginTop: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#1F2937',
    marginBottom: 16,
  },
  seeAllText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#3B82F6',
  },
  activityContainer: {
    marginBottom: 8,
  },
  workoutsContainer: {
    marginBottom: 24,
  },
});