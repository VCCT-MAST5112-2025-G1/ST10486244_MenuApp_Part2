import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#ff7043',
  primaryDark: '#ff5722',
  background: '#fffaf5',
  backgroundSecondary: '#fff5e6',
  white: '#ffffff',
  text: '#333333',
  textSecondary: '#666666',
  success: '#4caf50',
  error: '#f44336',
  warning: '#ff9800',
  info: '#2196f3',
  // Tag colors
  veg: '#c8e6c9',
  vegText: '#2e7d32',
  nonVeg: '#ffcdd2',
  nonVegText: '#c62828',
  popular: '#fff9c4',
  popularText: '#f57f17',
  new: '#b3e5fc',
  newText: '#01579b',
};

export const styles = StyleSheet.create({
  // Container styles
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  contentContainer: {
    flex: 1,
    padding: 15,
  },

  // Header styles
  header: {
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.white,
  },
  headerButton: {
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
  },
  headerButtonText: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 14,
  },

  // Filter bar styles
  filterBar: {
    flexDirection: 'row',
    marginBottom: 15,
    paddingBottom: 5,
  },
  filterButton: {
    backgroundColor: '#ffe0b2',
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  filterButtonActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primaryDark,
  },
  filterButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text,
  },
  filterButtonTextActive: {
    color: colors.white,
  },

  // Counter styles
  counter: {
    backgroundColor: colors.white,
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  counterText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
  },

  // Menu styles
  menuContainer: {
    flex: 1,
  },
  menuCard: {
    backgroundColor: colors.white,
    padding: 18,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 10,
    lineHeight: 20,
  },
  cardTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 6,
    marginBottom: 4,
  },
  tagText: {
    fontSize: 12,
    fontWeight: '600',
  },
  tagVeg: {
    backgroundColor: colors.veg,
  },
  tagVegText: {
    color: colors.vegText,
  },
  tagNonVeg: {
    backgroundColor: colors.nonVeg,
  },
  tagNonVegText: {
    color: colors.nonVegText,
  },
  tagPopular: {
    backgroundColor: colors.popular,
  },
  tagPopularText: {
    color: colors.popularText,
  },
  tagNew: {
    backgroundColor: colors.new,
  },
  tagNewText: {
    color: colors.newText,
  },
  cardPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primaryDark,
    marginTop: 8,
  },

  // Form styles
  formContainer: {
    flex: 1,
    padding: 20,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 20,
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: colors.white,
  },
  multilineInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: colors.white,
  },
  numericInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: colors.white,
  },
  submitButton: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  submitButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },

  // Statistics styles
  statsContainer: {
    backgroundColor: colors.white,
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 10,
  },
  statItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 14,
    color: colors.text,
  },
  statValue: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },

  // Empty state styles
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  emptyStateText: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 10,
  },

  // Tab navigation styles
  tabBar: {
    backgroundColor: colors.white,
    borderTopColor: '#e0e0e0',
    borderTopWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    height: 60,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: '600',
  },
  tabIcon: {
    fontSize: 24,
  },
});
