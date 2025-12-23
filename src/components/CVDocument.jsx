import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 30,
    fontSize: 12,
    fontFamily: 'Helvetica',
    backgroundColor: '#fff',
  },
  section: {
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  label: {
    fontWeight: 'bold',
  },
  text: {
    marginBottom: 5,
  },
});

export const CVDocument = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Basic Info */}
      <View style={styles.section}>
        <Text style={styles.title}>Basic Information</Text>
        <Text><Text style={styles.label}>Full Name: </Text>{data.basic.fullName}</Text>
        <Text><Text style={styles.label}>Email: </Text>{data.basic.email}</Text>
        <Text><Text style={styles.label}>LinkedIn: </Text>{data.basic.linkedIn}</Text>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.title}>Education</Text>
        {data.education.map((edu, i) => (
          <Text key={i}>
            <Text style={styles.label}>{edu.university}</Text>
            {edu.fromYear && edu.toYear && ` (${edu.fromYear} - ${edu.toYear})`}
          </Text>
        ))}
      </View>

      {/* Work Experience */}
      <View style={styles.section}>
        <Text style={styles.title}>Work Experience</Text>
        {data.work.map((job, i) => (
          <Text key={i}>
            <Text style={styles.label}>{job.company}</Text>
            {job.fromYear && job.toYear && ` (${job.fromYear} - ${job.toYear})`}
            {job.description && `: ${job.description}`}
          </Text>
        ))}
      </View>
    </Page>
  </Document>
);
