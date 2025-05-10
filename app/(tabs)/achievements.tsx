import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import AchievementCard from '@/components/AchievementCard';
import { mockAchievements } from '@/utils/mockData';
import { Medal, Sunrise, Calendar, Dumbbell, Droplet, Footprints } from 'lucide-react-native';

export default function AchievementsScreen() {
  const getAchievementIcon = (iconName: string) => {
    switch (iconName) {
      case 'sunrise':
        return <Sunrise size={24} color="#3B82F6" />;
      case 'calendar':
        return <Calendar size={24} color="#3B82F6" />;
      case 'dumbbell':
        return <Dumbbell size={24} color="#3B82F6" />;
      case 'drop':
        return <Droplet size={24} color="#3B82F6" />;
      case 'footprints':
        return <Footprints size={24} color="#3B82F6" />;
      default:
        return <Medal size={24} color="#3B82F6" />;
    }
  };

  const completedAchievements = mockAchievements.filter(achievement => achievement.completed);
  const inProgressAchievements = mockAchievements.filter(achievement => !achievement.completed);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Achievements</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{completedAchievements.length}</Text>
          <Text style={styles.statLabel}>Completed</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{inProgressAchievements.length}</Text>
          <Text style={styles.statLabel}>In Progress</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{mockAchievements.length}</Text>
          <Text style={styles.statLabel}>Total</Text>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Completed</Text>
          {completedAchievements.map((achievement) => (
            <AchievementCard
              key={achievement.id}
              title={achievement.title}
              description={achievement.description}
              completed={achievement.completed}
              progress={achievement.progress}
              icon={getAchievementIcon(achievement.icon)}
            />
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>In Progress</Text>
          {inProgressAchievements.map((achievement) => (
            <AchievementCard
              key={achievement.id}
              title={achievement.title}
              description={achievement.description}
              completed={achievement.completed}
              progress={achievement.progress}
              icon={getAchievementIcon(achievement.icon)}
            />
          ))}
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
    paddingBottom: 12,
  },
  headerTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 28,
    color: '#1F2937',
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    margin: 4,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  statValue: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: '#3B82F6',
    marginBottom: 4,
  },
  statLabel: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#6B7280',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#1F2937',
    marginBottom: 16,
  },
});