import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Calendar, ClipboardList, ChartBar as BarChart3, Activity, Flame, Clock, Dumbbell } from 'lucide-react-native';
import StatsCard from '@/components/StatsCard';
import { mockStats, mockWorkoutHistory } from '@/utils/mockData';

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export default function StatsScreen() {
  const [activeTab, setActiveTab] = React.useState('overview');

  const renderOverview = () => (
    <>
      <View style={styles.periodSelector}>
        {['Week', 'Month', 'Year'].map((period) => (
          <TouchableOpacity 
            key={period}
            style={[
              styles.periodButton,
              period === 'Month' && styles.activePeriodButton
            ]}
          >
            <Text style={[
              styles.periodButtonText,
              period === 'Month' && styles.activePeriodButtonText
            ]}>
              {period}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.statsGrid}>
        {mockStats.map((stat, index) => (
          <View key={index} style={styles.statsCardWrapper}>
            <StatsCard
              title={stat.title}
              value={stat.value}
              subtitle={stat.subtitle}
              icon={
                stat.icon === 'activity-square' ? <ActivitySquare size={20} color={stat.color} /> :
                stat.icon === 'flame' ? <Flame size={20} color={stat.color} /> :
                stat.icon === 'clock' ? <Clock size={20} color={stat.color} /> :
                <Dumbbell size={20} color={stat.color} />
              }
              color={stat.color}
            />
          </View>
        ))}
      </View>

      <View style={styles.chartSection}>
        <View style={styles.chartHeader}>
          <Text style={styles.chartTitle}>Workout Frequency</Text>
          <TouchableOpacity>
            <Text style={styles.chartOptionText}>Last 30 Days</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.chartPlaceholder}>
          <BarChart3 size={64} color="#CBD5E1" />
          <Text style={styles.chartPlaceholderText}>
            Workout data visualization
          </Text>
        </View>
      </View>
    </>
  );

  const renderHistory = () => (
    <View style={styles.historyContainer}>
      {mockWorkoutHistory.map((workout, index) => (
        <View key={workout.id} style={styles.historyItem}>
          <View style={styles.historyDateContainer}>
            <Text style={styles.historyDate}>{formatDate(workout.date)}</Text>
          </View>
          <View style={styles.historyCard}>
            <Text style={styles.historyWorkoutType}>{workout.workoutType}</Text>
            <View style={styles.historyDetailsContainer}>
              <View style={styles.historyDetail}>
                <Clock size={14} color="#6B7280" />
                <Text style={styles.historyDetailText}>{workout.duration} min</Text>
              </View>
              <View style={styles.historyDetail}>
                <Dumbbell size={14} color="#6B7280" />
                <Text style={styles.historyDetailText}>{workout.exercises} exercises</Text>
              </View>
              <View style={styles.historyDetail}>
                <Flame size={14} color="#6B7280" />
                <Text style={styles.historyDetailText}>{workout.calories} kcal</Text>
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Statistics</Text>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tabButton, activeTab === 'overview' && styles.activeTabButton]} 
          onPress={() => setActiveTab('overview')}
        >
          <BarChart3 size={20} color={activeTab === 'overview' ? '#3B82F6' : '#6B7280'} />
          <Text style={[styles.tabText, activeTab === 'overview' && styles.activeTabText]}>Overview</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tabButton, activeTab === 'history' && styles.activeTabButton]} 
          onPress={() => setActiveTab('history')}
        >
          <ClipboardList size={20} color={activeTab === 'history' ? '#3B82F6' : '#6B7280'} />
          <Text style={[styles.tabText, activeTab === 'history' && styles.activeTabText]}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tabButton, activeTab === 'calendar' && styles.activeTabButton]} 
          onPress={() => setActiveTab('calendar')}
        >
          <Calendar size={20} color={activeTab === 'calendar' ? '#3B82F6' : '#6B7280'} />
          <Text style={[styles.tabText, activeTab === 'calendar' && styles.activeTabText]}>Calendar</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'history' && renderHistory()}
        {activeTab === 'calendar' && (
          <View style={styles.comingSoonContainer}>
            <Calendar size={64} color="#CBD5E1" />
            <Text style={styles.comingSoonText}>Calendar view coming soon</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

// Special case for the ActivitySquare icon which seems to be referenced in the code
function ActivitySquare({ size, color }: { size: number, color: string }) {
  return <Activity size={size} color={color} />;
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
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  tabButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginRight: 8,
  },
  activeTabButton: {
    backgroundColor: '#EFF6FF',
  },
  tabText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#6B7280',
    marginLeft: 8,
  },
  activeTabText: {
    color: '#3B82F6',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  periodSelector: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24,
  },
  periodButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginHorizontal: 4,
  },
  activePeriodButton: {
    backgroundColor: '#3B82F6',
  },
  periodButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#6B7280',
  },
  activePeriodButtonText: {
    color: '#FFFFFF',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -8,
    marginBottom: 24,
  },
  statsCardWrapper: {
    width: '50%',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  chartSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  chartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  chartTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#1F2937',
  },
  chartOptionText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#3B82F6',
  },
  chartPlaceholder: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderRadius: 8,
  },
  chartPlaceholderText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#94A3B8',
    marginTop: 8,
  },
  historyContainer: {
    marginBottom: 24,
  },
  historyItem: {
    marginBottom: 20,
  },
  historyDateContainer: {
    marginBottom: 8,
  },
  historyDate: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#6B7280',
  },
  historyCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  historyWorkoutType: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#1F2937',
    marginBottom: 8,
  },
  historyDetailsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  historyDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
    marginBottom: 4,
  },
  historyDetailText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#6B7280',
    marginLeft: 4,
  },
  comingSoonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 64,
  },
  comingSoonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: '#94A3B8',
    marginTop: 16,
  },
});