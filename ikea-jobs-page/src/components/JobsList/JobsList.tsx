import React from 'react';
import { MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import JobItem from '../JobItem';
import { useJobsList } from './useJobsList';
import { LABELS } from './constants';
import { generateJobKey } from './utils';
import {
  PageContainer,
  PageTitle,
  FiltersContainer,
  SearchTextField,
  FilterSelect,
  SearchButton,
  ClearButton,
  ResultsCount,
  JobsContainer,
  NoResults,
} from './JobsList.styles';

/**
 * JobsList Component - Main page displaying all available job postings with filtering
 * 
 * Features:
 * - Text search across job titles and descriptions
 * - Filter by branch/store location
 * - Filter by profession/field
 * - Real-time results count
 * - Accessibility support (ARIA labels, keyboard navigation)
 * - Optimized with React.memo to prevent unnecessary re-renders
 * 
 * @component
 * @example
 * ```tsx
 * // Main jobs page - no props needed
 * <JobsList />
 * ```
 */
const JobsList: React.FC = () => {
  const {
    filteredJobs,
    searchTerm,
    selectedBranch,
    selectedProf,
    branches,
    professions,
    setSearchTerm,
    setSelectedBranch,
    setSelectedProf,
    handleSearch,
    handleClearFilters,
  } = useJobsList();

  return (
    <PageContainer maxWidth="lg">
      <PageTitle variant="h3">{LABELS.PAGE_TITLE}</PageTitle>

      <FiltersContainer>
        <SearchTextField
          placeholder={LABELS.SEARCH_PLACEHOLDER}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          variant="outlined"
          size="small"
          aria-label={LABELS.SEARCH_PLACEHOLDER}
        />

        <FilterSelect
          value={selectedBranch}
          onChange={(e) => setSelectedBranch(e.target.value as string)}
          displayEmpty
          size="small"
          aria-label="בחירת חנות"
        >
          <MenuItem value="">{LABELS.ALL_STORES}</MenuItem>
          {branches.map((b) => (
            <MenuItem key={b} value={b}>
              {b}
            </MenuItem>
          ))}
        </FilterSelect>

        <FilterSelect
          value={selectedProf}
          onChange={(e) => setSelectedProf(e.target.value as string)}
          displayEmpty
          size="small"
          aria-label="בחירת תחום"
        >
          <MenuItem value="">{LABELS.ALL_FIELDS}</MenuItem>
          {professions.map((p) => (
            <MenuItem key={p} value={p}>
              {p}
            </MenuItem>
          ))}
        </FilterSelect>

        <SearchButton
          variant="contained"
          color="primary"
          onClick={handleSearch}
          startIcon={<SearchIcon />}
          aria-label={LABELS.SEARCH_BUTTON}
        >
          {LABELS.SEARCH_BUTTON}
        </SearchButton>

        <ClearButton
          variant="contained"
          color="error"
          onClick={handleClearFilters}
          startIcon={<ClearIcon />}
          aria-label={LABELS.CLEAR_BUTTON}
        >
          {LABELS.CLEAR_BUTTON}
        </ClearButton>
      </FiltersContainer>

      <ResultsCount variant="body1" role="status" aria-live="polite">
        {LABELS.RESULTS_COUNT} {filteredJobs.length} {LABELS.RESULTS_SUFFIX}
      </ResultsCount>

      <JobsContainer>
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <JobItem key={generateJobKey(job, index)} job={job} />
          ))
        ) : (
          <NoResults variant="h6" role="alert">
            {LABELS.NO_RESULTS}
          </NoResults>
        )}
      </JobsContainer>
    </PageContainer>
  );
};

export default React.memo(JobsList);
